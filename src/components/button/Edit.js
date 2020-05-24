import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import * as firebase from "firebase";
import {connect} from "react-redux";
import ValidModal from "../modal/ValidModal";
import Modal from "../modal/Modal";
import ConfirmModal from "../modal/ConfirmModal";

const Edit = (props) => {

    const [title, setTitle] = useState();
    const [data, setData] = useState();
    const [openModal,setOpenModal]=useState(false);
    const [successEdit, setSuccessEdit] = useState(false);


    useEffect(() => {
        setTitle(props.title);
        setData(JSON.stringify(props.data));
    });

    const onEdit = (e) => {
        e.preventDefault();
        if(title.length>0) {
            const {uid} = props.user;
            const database = firebase.database();

            let time = new Date();
            let date = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

            database.ref(`mandal/${uid}`).once('value', (snapshot) => {
                let obj = snapshot.val();
                let keyList = [];

                //키값 찾기
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        keyList.push(key);
                        // console.log(key);
                    }
                }
                // console.log(props.pageNo);
                database.ref(`mandal/${uid}/${keyList[props.pageNo]}`).update({
                    title: title,
                    data: data,
                    time: date
                });
            }).then(() => {
                setSuccessEdit(true);
            });
        }else{
            setOpenModal(true);
        }
    }
    const onOpen=(bool)=>{
        setOpenModal(bool);
    }
    const onProgress=(bool)=>{
        setSuccessEdit(bool);
        if(bool){
            window.location.href='/mypage'
        }
    }

    return (
        <>
            {
                openModal &&
                <ValidModal isOpen={openModal}
                            title="제목을 입력해주세요"
                            contents="제목을 작성하지 않았습니다.<br/>제목을 작성하지 않으면 저장할 수 없습니다."
                            onOpen={onOpen}
                />
            }
            {
                successEdit &&
                <ConfirmModal isOpen={successEdit}
                              title="수정이 완료되었습니다."
                              contents="지금 바로 마이페이지에서 확인할 수 있습니다.<br/>수정된 내용을 확인하시겠습니까?"
                              onProgress={onProgress}
                />
            }
            <button className="btn edit" onClick={onEdit}>수정완료</button>
        </>
    );

}

export default connect(
    (state)=>({
        user:state.auth.user
    })
)(Edit);