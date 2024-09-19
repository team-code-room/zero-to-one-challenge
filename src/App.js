import React from 'react';
import {DollarSign, Megaphone, Lightbulb, Settings, GraduationCap, User, Brain, Award, Target, Zap, Briefcase, ArrowRight} from 'lucide-react';
import teachingIllustration from './assets/images/teaching.jpeg';
import joinNowIllustration from './assets/images/join_now.jpeg';
import Team from './components/Team';
import MetaCognition from './components/MetaCognition';

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

const App = () => {
    const programSteps = [
        {
            title: "온보딩 인터뷰",
            description: "신청서 내용 기반 온라인 인터뷰 (Zoom/Google Meet)"
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
            title: "1주차: 강의 커리큘럼 목록 설계",
            description: [
                "수강자를 배려한 매력적인 커리큘럼 구성",
                "학습적 측면에서 효과적인 커리큘럼 설계",
                "꼭 필요한 내용으로 구성된 매력적인 강의 구조 만들기"
            ]
        },
        {
            title: "2주차: 영상 촬영",
            description: [
                "최적의 환경에서 강의 영상 촬영",
                "IT 강의 특성에 맞는 화면 녹화 기법 학습",
                "효과적인 강의 전달을 위한 발표 스킬 향상"
            ]
        },
        {
            title: "3주차: 강의 영상 편집",
            description: [
                "효과적인 편집 툴 활용 및 기술 습득",
                "최적의 단축키 세팅으로 편집 효율 극대화",
                "수강생의 집중도를 높이는 편집 기법 학습"
            ]
        },
        {
            title: "4주차: 강의 제작 완료 및 플랫폼 런칭",
            description: [
                "최종 점검 및 온라인 플랫폼 업로드",
                "강의 설명, 대상 타겟층, 기대효과 등 상세 정보 작성",
                "질문 & 답변 시스템 채널 운영 방법 학습",
                "셀프 마케팅 및 강의 활성화 방안 연구"
            ]
        },
    ];

    const challengeCompletionBenefits = [
        {
            title: "강의 제작 스킬",
            description: "전문적인 온라인 강의 제작 능력 획득",
            icon: GraduationCap
        },
        {
            title: "메타 인지 능력",
            description: "자기 주도적 학습과 문제 해결 능력 향상",
            icon: Lightbulb
        },
        {
            title: "포트폴리오",
            description: "실제 제작한 강의로 포트폴리오 구축",
            icon: Briefcase
        },
        {
            title: "네트워킹",
            description: "같은 목표를 가진 동료들과의 네트워크 형성",
            icon: User
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
            title: "컨설팅 제공",
            description: "실전 프로젝트 웹 / 앱 서비스 출시 컨설팅 제공",
            icon: Target
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
    ];

    return (
        <div className="font-sans">
            <Header />

            <Section title="파이프 코칭 캠프란?" emoji="🚀" bgColor="bg-gray-50">
                <p className="text-lg text-gray-700 mb-4">
                    파이프 코칭 캠프는 기존의 개발자들이 단순히 코딩에만 몰입하거나,
                    개발적인 부분에 사로잡혀서 자신의 잠재력을 찾을 여유가 없는 분들을 위해 준비한 챌린지 프로그램입니다.
                </p>
                <p className="text-lg text-gray-700">
                    내가 어떠한 지식에 대해서 이해했다라고 답할 수 있으려면, 우선적으로 내가 타인에게 그 지식을 설명할 수 있어야 합니다.
                    하지만, 누군가에게 인정받으려고 발버둥 치기 바쁜 현대사회에서 이번 프로그램을 통해서 개발자라는 직업은 단순히 출발점이었고,
                    그 너머엔 자생할 수 있는 무한한 가능성들이 준비되어있다는 것을 알려드리고 싶습니다.
                </p>
            </Section>

            <MetaCognition />

            <Section title="사전 준비 밋업" emoji="🔽">
                <HorizontalFlowChart steps={programSteps} />
            </Section>

            <Section title="코칭 캠프 커리큘럼" emoji="📚" bgColor="bg-gray-50">
                <Timeline steps={curriculumSteps} />
            </Section>

            <Team />

            <Section title="챌린지 완성 혜택" emoji="🏆" bgColor="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {challengeCompletionBenefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </Section>

            <Section title="챌린지 성공 혜택" emoji="🌟">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challengeSuccessBenefits.map((benefit, index) => (
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
                <p>&copy; 2024 파이프 코칭 캠프. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;