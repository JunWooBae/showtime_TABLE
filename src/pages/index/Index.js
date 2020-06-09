import React, {useEffect} from 'react';
import ReactHelmet from "../../components/ReactHelmet";
import Write from '../../components/button/Write';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Index = () => {
    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <>
            <ReactHelmet
                title="만다라트 | 나만의 만다라트를 만들어 계획을 실천하세요"
                description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
            />
            <section className="home-section">
                <div className="h-100 bg-blue-m container flex flex-col justify-center mb-100">
                    <div className="font-xl font-medium font-white mb-50">
                        함께, <span className="yellow">계획</span>을 세워요<br/>
                        지금 바로 시작하세요
                    </div>
                    <Write/>
                </div>

                <div className="h-100 py-3 container flex flex-col justify-center">
                    <div data-aos="zoom-in" className="text-center mb-100 mt-200">
                        <div className="font-lg font-medium py-1">만다라트란?</div>
                        <div className=" font-gray mb-50">
                            <span className="only-pc">만다라트(Mandal-Art) 기법은</span> 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                            Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로<br className="only-mobile"/> '목적을 달성하는 기술'을 뜻합니다.<br/>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="flex items-center justify-between mb-150">
                        <img className="home-img mr-50" src={require('../../assets/img/note.svg')} alt="만다라트-공책이미지"/>
                        <div className="w-100 text-right">
                            <div className="font-lg font-medium py-1 mb-20 border-bottom">아이디어 구체화</div>
                            <div className=" font-gray mb-50">
                                핵심목표에 대한 아이디어, 생각들을 확산하여<br/>
                                구체화 할 때 아주 유용하게 활용할 수 있습니다.
                            </div>
                            <Write/>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="flex items-center justify-between mb-150">
                        <div className="w-100">
                            <div className="font-lg font-medium py-1 mb-20 border-bottom">모바일 환경 제공</div>
                            <div className="font-gray mb-50">
                                웹뿐만 아니라 모바일에서도 이용할 수 있습니다.<br/>
                                하지만, 저는 웹을 권장합니다.
                            </div>
                            <Write/>
                        </div>
                        <img className="home-img ml-50" src={require('../../assets/img/mobile.svg')} alt="만다라트-휴대폰이미지"/>
                    </div>

                    <div data-aos="zoom-in" className="flex items-center justify-between mb-150">
                        <img className="home-img mr-50" src={require('../../assets/img/onoffline.svg')} alt="만다라트-프린트이미지"/>
                        <div className="w-100 text-right">
                            <div className="font-lg font-medium py-1 mb-20 border-bottom">온오프라인 만다라트</div>
                            <div className=" font-gray mb-50">
                                온라인에서 작성한 만다라트를 인쇄해보세요.<br/>
                                오프라인에서도 만다라트를 즐길 수 있습니다.
                            </div>
                            <Write/>
                        </div>
                    </div>
                </div>
                <div className="h-100 container bg-blue flex flex-col items-center justify-center">
                    <div className="font-lg font-medium font-white text-center mb-50">
                        이제 시작해볼까요?<br/>
                        함께, 만다라트를 만들어요
                    </div>
                    <Write/>
                </div>
            </section>
        </>
    )
}

export default Index;