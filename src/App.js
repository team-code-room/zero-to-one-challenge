import React, { useState } from 'react';
import {DollarSign, Megaphone, Lightbulb, Settings, GraduationCap, User, Award, Target, Zap, Briefcase, ArrowRight, ChevronDown, ChevronUp} from 'lucide-react';
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
            <h1 className="text-5xl font-bold mb-4">파이프 코칭 캠프</h1>
            <p className="text-2xl max-w-3xl mx-auto">
                "30일 간의 온라인 개발 강의 제작 판매로 수익화 실현"
            </p>
            <a
                href="https://forms.gle/VoZrPH2w4mU445Hy9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-600 font-bold py-2 px-4 rounded-full text-lg hover:bg-indigo-100 transition duration-300 shadow-lg hover:shadow-xl mt-4"
            >
                파이프 코칭 캠프 신청하기
            </a>
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
                파이프 코칭 캠프 신청하기
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

const HorizontalFlowChart = ({ steps }) => (
  <div className="flex flex-col md:flex-row justify-between items-center my-8 overflow-x-auto">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center mb-4 md:mb-0 mx-4">
          <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xl font-bold mb-2">
            {index + 1}
          </div>
          <div className="text-center w-40">
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        </div>
        {index < steps.length - 1 && (
          <ArrowRight className="hidden md:block w-8 h-8 text-indigo-500 mx-2" />
        )}
      </React.Fragment>
    ))}
  </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6 border-b border-gray-200 pb-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(prevState => !prevState)}
            >
                <h4 className="text-lg font-semibold">{question}</h4>
                {isOpen ? <ChevronUp className="w-6 h-6 text-indigo-600" /> : <ChevronDown className="w-6 h-6 text-indigo-600" />}
            </button>
            {isOpen && (
                <p className="mt-4 text-gray-600 bg-gray-50 p-4 rounded-lg">
                    {answer}
                </p>
            )}
        </div>
    );
};

const App = () => {
    const programSteps = [
        {
            title: "온보딩 인터뷰",
            description: "ZEP 메타버스 온라인 인터뷰"
        },
        {
            title: "킥오프 인터뷰",
            description: "오프라인 인터뷰 및 준비사항 안내 (서울 독산역 인근)"
        },
        {
            title: "강의 계획서 작성",
            description: "강의 내용 및 목표 설정, 기본 방향성 수립"
        }
    ];

    const curriculumSteps = [
        {
            title: "Chapter 1. 맞춤형 커리큘럼 기획",
            description: [
                "수강자를 배려한 매력적인 커리큘럼 구성",
                "학습적 측면에서 효과적인 커리큘럼 설계",
                "꼭 필요한 내용으로 구성된 매력적인 강의 구조 만들기"
            ]
        },
        {
            title: "Chapter 2. 강의 촬영(장소 제공)",
            description: [
                "최적의 환경에서 강의 영상 촬영",
                "IT 강의 특성에 맞는 화면 녹화 기법 학습",
                "효과적인 강의 전달을 위한 발표 스킬 향상"
            ]
        },
        {
            title: "Chapter 3. 강의 영상 편집",
            description: [
                "효과적인 편집 툴 활용 및 기술 습득",
                "최적의 단축키 세팅으로 편집 효율 극대화",
                "수강생의 집중도를 높이는 편집 기법 학습"
            ]
        },
        {
            title: "Chapter 4. 전체적인 퀄리티 체크 및 강의 플랫폼 업로드",
            description: [
                "최종 점검 및 온라인 플랫폼 업로드",
                "강의 설명, 수강 대상 타겟층, 기대효과 등 상세 정보 작성",
                "질문 & 답변 시스템 채널 운영 방법 학습",
                "셀프 마케팅 및 강의 활성화 방안 연구"
            ]
        },
    ];

    const challengeSuccessBenefits = [
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
            title: "지속적 관리",
            description: "출시 이후 지속적인 강의 유지보수 & 수익창출 관리",
            icon: Settings
        },
        {
            title: "무료 강의",
            description: "양질의 다양한 강의 수강권 무료 지급 (Flutter, Python, Unity, 자동화 등)",
            icon: Award
        },
        {
            title: "셀프 브랜딩 실현",
            description: "개인 브랜드 구축 및 전문가로서의 입지 확립 지원",
            icon: Zap
        },
        {
            title: "재참가 할인",
            description: "파이프코칭클럽 재참가시 파격적인 할인 혜택",
            icon: Briefcase
        },
        {
            title: "추가 수익 기회",
            description: "멘토링 & 기업 강사로 활동할 수 있는 추가 수익 기회 제공",
            icon: User
        },
        {
            title: "멤버십 혜택",
            description: "개발자 프라이빗 멤버십 가입 혜택",
            icon: GraduationCap
        },
    ];

    const faqItems = [
        {
            question: "선발 절차가 있나요?",
            answer: "강사 시작을 희망하는 열정 있는 누구나 참여 가능합니다. 좋은 개발자 양성에 기여하여 경험할 수 없었던 성취감과 보람을 느껴보세요."
        },
        {
            question: "어떤 주제로 강의를 만들 수 있나요?",
            answer: "IT와 관련된 모든 주제가 가능합니다. 프로그래밍 언어, 웹 개발, 모바일 앱 개발, 데이터 과학, 인공지능 등 다양한 분야에서 여러분의 전문성을 살릴 수 있습니다."
        },
        {
            question: "강의 제작 경험이 없어도 참여할 수 있나요?",
            answer: "물론입니다! 파이프 코칭 캠프는 강의 제작 경험이 없는 분들을 위한 프로그램입니다. 전문가의 지도 아래 처음부터 끝까지 모든 과정을 배우고 실습할 수 있습니다."
        }
    ];

    return (
        <div className="font-sans">
            <Header />

            <Section title="파이프 코칭 캠프 소개" emoji="🚀" bgColor="bg-gray-50">
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">"당신만의 강의, 지금 시작하세요 !"</h2>
                    <p className="mb-2">누구나 가지고 있는 특별한 지식과 경험이 있습니다. 우리와 함께하면 그 지식을 나누는 강사가 될 수 있습니다. 두려워하지 마세요, 여러분의 잠재력을 믿습니다.</p>
                    <p className="mb-2">개인 맞춤형 커리큘럼으로 여러분에게 가장 적합한 강의 계획을 세우고, 전문가의 도움으로 강의 제작 전 과정을 지원합니다.</p>
                    <p className="mb-2">이 프로그램을 통해 강의 기획부터 제작, 다양한 온라인 플랫폼 출시, 그리고 수익화까지 모든 과정을 경험하며 성장할 수 있습니다.</p>
                    <p className="mb-2">여러분의 지식이 가치 있는 콘텐츠로 변화하는 여정을 함께 시작해보세요.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">CEO 김상훈</h3>
                        <p className="text-gray-700">피칭, 강의 정보 설계 피드백 역할</p>
                        <p className="text-sm text-gray-600">사업 경험과 다양한 대외활동 위믹스, 컨택트, 청년엔진 등</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">CTO 이홍철</h3>
                        <p className="text-gray-700">강의 촬영 & 편집, 커리큘럼 설계 피드백 역할</p>
                        <p className="text-sm text-gray-600">온라인 지식 공유자 다수 경험 (youtube, udemy, inflearn, goorm edu)</p>
                    </div>
                </div>
            </Section>

            <Section title="기본 커리큘럼" emoji="🚀">
                <HorizontalFlowChart steps={programSteps} />
            </Section>

            <Section title="상세 커리큘럼" emoji="📚" bgColor="bg-gray-50">
                <Timeline steps={curriculumSteps} />
            </Section>

            <Section title="캠프 수료 혜택" emoji="🌟">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challengeSuccessBenefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </Section>

            <Section title="참가 정보" emoji="💰">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-2xl font-bold mb-2">참가비</h3>
                    <p className="text-xl"><span className="line-through">55만원</span> → <span className="font-bold text-indigo-600 text-2xl">33만원</span> (얼리버드 할인가)</p>
                    <p className="text-sm text-gray-600 mt-2">얼리버드 종료 이후 정상가 → 55만원</p>
                    <p className="text-sm text-gray-600 mt-2">신청서 작성 이후 선정되신 분에게 입금 요청을 진행합니다</p>
                </div>
            </Section>

            <Section title="공지사항 및 자주 묻는 질문" emoji="❓" bgColor="bg-gray-50">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {faqItems.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </Section>

            <Section title="환불 규정" emoji="💸">
                <ul className="list-disc pl-5 space-y-2">
                    <li>파이프 코칭캠프 시작 전(킥오프 인터뷰 전) &gt; 100% 환불</li>
                    <li>파이프 코칭캠프 1/3 경과 전(시작 후 10일 전까지) : 2/3 금액 환불 &gt; 22만원 환불</li>
                    <li>파이프 코칭캠프 1/2 경과 전(시작 후 14일 전까지) : 1/2 금액 환불 &gt; 16.5만원 환불</li>
                    <li>파이프 코칭캠프 1/2 경과 후(2주 코스 후) &gt; 환불 불가</li>
                </ul>
            </Section>

            <JoinNowSection />

            <footer className="bg-gray-800 text-white py-8 text-center">
                <p>&copy; 2024 파이프 코칭 캠프. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;