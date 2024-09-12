import React from 'react';
import {DollarSign, Megaphone, Lightbulb, Settings, GraduationCap, User} from 'lucide-react';
import teachingIllustration from './assets/images/teaching.jpeg';
import joinNowIllustration from './assets/images/join_now.jpeg';

const Header = () => (
    <header className="relative bg-black text-white py-20 text-center">
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
                backgroundImage: `url(${teachingIllustration})`,
                filter: 'brightness(50%)'
            }}
        />
        <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">파이오니어 티칭 캠프</h1>
            <p className="text-2xl max-w-3xl mx-auto">
                "30일 간의 온라인 개발 강의 제작 판매로 수익화 실현"
            </p>
        </div>
    </header>
);

const JoinNowSection = () => (
    <section className="relative py-20 text-white text-center">
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
                backgroundImage: `url(${joinNowIllustration})`,
                filter: 'brightness(70%)'
            }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">지금 바로 참여하세요!</h2>
            <p className="text-xl mb-8">당신의 잠재력을 깨우고 새로운 기회를 만들어보세요.</p>
            <a
                href="https://forms.gle/VoZrPH2w4mU445Hy9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-600 font-bold py-4 px-8 rounded-full text-xl hover:bg-indigo-100 transition duration-300 shadow-lg hover:shadow-xl"
            >
                파이오니어 티칭 캠프 신청하기
            </a>
        </div>
    </section>
);

const Section = ({ title, children, emoji, bgColor = "bg-white" }) => (
    <section className={`py-16 px-4 ${bgColor}`}>
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
                {emoji && <span className="mr-2 text-3xl">{emoji}</span>}
                {title}
            </h2>
            {children}
        </div>
    </section>
);

const Timeline = ({ steps }) => (
    <div className="relative">
        {steps.map((step, index) => (
            <div key={index} className="mb-12 flex">
                <div className="flex flex-col items-center mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white text-xl font-bold">
                        {index + 1}
                    </div>
                    {index !== steps.length - 1 && <div className="h-full w-1 bg-indigo-300 my-2" />}
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <div className="text-gray-600 space-y-2">
                        {Array.isArray(step.description) ? (
                            step.description.map((item, idx) => <p key={idx}>{item}</p>)
                        ) : (
                            <p>{step.description}</p>
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const BenefitCard = ({ title, description, icon: Icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

const App = () => {
    const programSteps = [
        {
            title: "사전 인터뷰",
            description: [
                "온보딩 인터뷰: 신청서 작성 내용을 토대로 인터뷰를 진행합니다. (온라인 원격회의 Zoom Or Google Meet)",
                "컬쳐 핏을 체크하기 위한 질답을 주고받습니다.",
                "킥오프 인터뷰: 온보딩 내용을 바탕으로 오프라인 인터뷰를 실시합니다. (서울 독산역 인근)",
                "챌린지 시작에 앞서 필요한 준비들을 안내합니다."
            ]
        },
        {
            title: "1주차: 강의 계획서 작성",
            description: [
                "내가 가장 잘 준비할 수 있는 강의 내용들을 정리해보는 시간을 가집니다.",
                "지금까지 학습해온 내용 기반으로 강의의 기본적인 내용과 목표를 설정합니다."
            ]
        },
        {
            title: "2주차: 강의 커리큘럼 목록 세팅 및 영상 촬영",
            description: [
                "정해진 강의 제작의 방향성을 토대로 학습적인 측면에서 수강자들을 배려한 커리큘럼 목록들을 설계합니다.",
                "꼭 필요한 내용들로만 꾹꾹 담아볼 수 있는 매력적인 구성을 만듭니다.",
                "자신에게 맞는 최적의 공간에서 영상 녹화를 진행합니다. IT 강의의 특성상 컴퓨터 화면 녹화 기능을 활용합니다."
            ]
        },
        {
            title: "3주차: 강의 영상 편집",
            description: [
                "촬영된 영상들을 편집 툴을 활용하여 편집을 합니다.",
                "최적의 단축키 세팅으로 편집을 손쉽게 할 수 있는 방법을 안내합니다."
            ]
        },
        {
            title: "4주차: 강의 제작 완료 및 플랫폼 런칭",
            description: [
                "완성된 강의 내용을 토대로 강의 설명과 대상 타겟층, 강의를 들었을 때의 얻을 수 있는 것 등의 내용들을 기록합니다.",
                "준비가 되면 강의를 플랫폼에 런칭하여 수익을 창출합니다.",
                "차후 강의 운영 관리 세팅: 질문 & 답변 시스템 채널 운영, 셀프 마케팅 수행 방법, 강의 활성화 방안 연구, 멘토링 시스템의 활용으로 추가적인 수익화 루트 개척"
            ]
        },
    ];

    const benefits = [
        {
            title: "수익 공유",
            description: "온라인 강의 플랫폼 강의 판매 수익 쉐어",
            icon: DollarSign
        },
        {
            title: "마케팅 지원",
            description: "자사 인플루언서 & 온라인 채널 활용 마케팅",
            icon: Megaphone
        },
        {
            title: "컨설팅 제공",
            description: "실전 프로젝트 웹 / 앱 서비스 출시 컨설팅 제공",
            icon: Lightbulb
        },
        {
            title: "지속적 관리",
            description: "출시 이후 지속적인 강의 유지보수 & 수익창출 관리",
            icon: Settings
        },
        {
            title: "무료 강의",
            description: "양질의 다양한 강의 수강권 무료 지급 (Flutter, Python, Unity, 자동화 등)",
            icon: GraduationCap
        },
        {
            title: "셀프 브랜딩 실현",
            description: "개인 브랜드 구축 및 전문가로서의 입지 확립 지원",
            icon: User
        },
    ];

    return (
        <div className="font-sans">
            <Header />

            <Section title="파이오니어 티칭 캠프란?" emoji="🚀" bgColor="bg-gray-50">
                <p className="text-lg text-gray-700 mb-4">
                    파이오니어 티칭 캠프는 기존의 개발자들이 단순히 코딩에만 몰입하거나,
                    개발적인 부분에 사로잡혀서 자신의 잠재력을 찾을 여유가 없는 분들을 위해 준비한 챌린지 프로그램입니다.
                </p>
                <p className="text-lg text-gray-700">
                    내가 어떠한 지식에 대해서 이해했다라고 답할 수 있으려면, 우선적으로 내가 타인에게 그 지식을 설명할 수 있어야 합니다.
                    하지만, 누군가에게 인정받으려고 발버둥 치기 바쁜 현대사회에서 이번 프로그램을 통해서 개발자라는 직업은 단순히 출발점이었고,
                    그 너머엔 자생할 수 있는 무한한 가능성들이 준비되어있다는 것을 알려드리고 싶습니다.
                </p>
            </Section>

            <Section title="프로그램 진행 과정" emoji="🔽">
                <Timeline steps={programSteps} />
            </Section>

            <Section title="챌린지 성공 혜택" emoji="✅" bgColor="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </Section>

            <Section title="참가 정보" emoji="💰">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-2xl font-bold mb-2">참가비</h3>
                    <p className="text-xl"><span className="line-through">24만원</span> → <span className="font-bold text-indigo-600 text-2xl">22만원</span> (얼리버드 할인가)</p>
                    <p className="text-sm text-gray-600 mt-2">얼리버드 종료 이후 정상가 → 24만원</p>
                    <p className="text-sm text-gray-600 mt-2">신청서 작성 이후 선정되신 분에게 입금 요청을 진행합니다</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">환불 규정</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>오프라인 인터뷰 진행 이후 진행의사 없을 시 100% 환불</li>
                        <li>강의 계획서, 커리큘럼 작성 후 프로젝트 착수 이전 중도 포기 시 70% 환불</li>
                        <li>강의 영상 촬영 또는 편집 과정 중도 포기 시 50% 환불</li>
                        <li>강의 최종 패키징 작업 중도 포기 시 30% 환불</li>
                        <li>프로젝트 수행기간 내에 이틀 이상 잠수 시 환불 불가</li>
                    </ul>
                </div>
            </Section>

            <JoinNowSection />

            <footer className="bg-gray-800 text-white py-8 text-center">
                <p>&copy; 2024 파이오니어 티칭 캠프. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;