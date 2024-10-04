import React from 'react';
import {DollarSign, Award, Zap, Briefcase, Sparkles, Users, BookOpen, Rocket, UserCheck, FileText, Upload, LifeBuoy, Code, Mail, MessageCircle, Target, Gift, CreditCard, RefreshCcw, Lightbulb, HelpCircle} from 'lucide-react';
import teachingIllustration from './assets/images/teaching.jpeg';
import joinNowIllustration from './assets/images/join_now.jpeg';
import './fonts.css'; // 폰트를 import하는 CSS 파일
import { motion } from 'framer-motion';

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
            <h1 className="text-5xl font-bold mb-4 font-heading">파이프 코칭 캠프</h1>
            <p className="text-2xl max-w-3xl mx-auto font-subheading mb-2">
                "수익을 창출하는 맞춤형 강의 제작 마스터 클래스"
            </p>
            <p className="text-2xl max-w-3xl mx-auto font-subheading mb-4">
                "당신의 지식을 수익으로! 강사로서의 첫걸음을 내딛으세요"
            </p>
            <a
                href="https://docs.google.com/forms/d/1bvOguf3pLp-C8lu554utjxJB4VYsytHq2m__gya27-E/edit?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-600 font-extrabold py-3 px-8 rounded-full text-xl hover:bg-indigo-100 transition duration-300 shadow-lg hover:shadow-xl mt-6 font-body"
            >
                신청하기
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
            <h2 className="text-4xl font-bold mb-8">지금 바로 신청하세요!</h2>
            <p className="text-xl mb-8">여러분의 지식을 가치로 전환하는 흥미진진한 여정을 파이프코칭캠프에서 시작하세요!</p>
            <p className="text-lg mb-8">아래 버튼을 클릭하여 신청서를 작성해 주세요.</p>
            <a
                href="https://docs.google.com/forms/d/1bvOguf3pLp-C8lu554utjxJB4VYsytHq2m__gya27-E/edit?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-2xl hover:bg-indigo-100 transition duration-300 shadow-lg hover:shadow-xl"
            >
                신청하기
            </a>
        </div>
    </section>
);

const Section = ({ title, children, bgColor = "bg-white", icon: Icon }) => (
    <section className={`py-12 px-4 ${bgColor}`}>
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center font-heading flex items-center justify-center">
                {Icon && <Icon className="w-8 h-8 md:w-12 md:h-12 mr-3 md:mr-4 text-indigo-600" />}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
                    {title}
                </span>
            </h2>
            <div className="text-left text-lg">
                {children}
            </div>
        </div>
    </section>
);

const BenefitCard = ({ icon: Icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full border border-indigo-100">
        <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <Icon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 leading-tight">{title}</h3>
        </div>
        <ul className="text-base text-gray-700 space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2 flex-shrink-0 text-xl">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const TargetCard = ({ icon: Icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-duration-300 h-full flex flex-col w-full">
        <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-indigo-600 mr-3 flex-shrink-0" />
            <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
        </div>
        <ul className="space-y-2 flex-grow">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const WeeklyContent = ({ week, title, items }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-indigo-600">{week}주차] {title}</h3>
        <ul className="space-y-6">
            {items.map((item, index) => (
                <li key={index} className="ml-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {item.description.split('. ').map((desc, i) => (
                            <li key={i}>{desc.trim()}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
);

const CompletionBenefitCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-duration-300 h-full flex flex-col">
        <div className="flex items-center mb-4">
            <Icon className="w-10 h-10 text-indigo-600 mr-4 flex-shrink-0" />
            <h3 className="text-2xl font-bold text-indigo-600">{title}</h3>
        </div>
        <div className="text-base text-gray-700 flex-grow whitespace-pre-line">
            {description}
        </div>
    </div>
);

const ContactSection = () => (
    <Section title="문의" bgColor="bg-gray-100" icon={HelpCircle}>
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl mb-8">궁금한 점이 있다면 언제든지 문의해 주세요!</p>
            <div className="space-y-6">
                <div className="flex items-center justify-center">
                    <Mail className="w-8 h-8 text-indigo-600 mr-4" />
                    <span className="text-lg">이메일: pipecoachingcamp@gmail.com</span>
                </div>
                <div className="flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-indigo-600 mr-4" />
                    <span className="text-lg">카카오톡 채널: 파이프코칭캠프</span>
                </div>
            </div>
        </div>
    </Section>
);

const FAB = () => (
  <a
    href="https://pf.kakao.com/_sfuZn/chat"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50 hover:shadow-2xl transform hover:-translate-y-1"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

const OpportunityCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-duration-300">
        <h4 className="text-xl font-semibold mb-3 text-indigo-600">{title}</h4>
        <p className="text-gray-700">{description}</p>
    </div>
);

const SmallSection = ({ title, children, bgColor = "bg-white", icon: Icon }) => (
    <section className={`py-8 px-4 ${bgColor}`}>
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center font-heading flex items-center justify-center text-gray-700">
                {Icon && <Icon className="w-5 h-5 mr-2 text-gray-600" />}
                <span>{title}</span>
            </h2>
            <div className="text-left text-base">
                {children}
            </div>
        </div>
    </section>
);

const App = () => {
    const targetAudience = [
        {
            icon: Users,
            title: "현직 개발자",
            items: [
                "실무 경험이 있는 개발자로, 자신의 지식을 공유하고 싶은 분",
                "특정 기술이나 언어에 대한 전문성이 있는 분"
            ]
        },
        {
            icon: BookOpen,
            title: "강의 제작 초보자",
            items: [
                "강의 제작에 대한 경험이 없지만, 교육 콘텐츠에 관심이 있는 분",
                "효과적인 강의 기획 및 제작 방법을 배우고 싶은 분"
            ]
        },
        {
            icon: Award,
            title: "브랜드 구축 희망자",
            items: [
                "온라인에서 개인 브랜드를 구축하고 싶은 분",
                "강의, 블로그, 유튜브 등 다양한 플랫폼에서 수익화를 고민하는 분"
            ]
        },
        {
            icon: Rocket,
            title: "프리랜서 및 창업 준비자",
            items: [
                "프리랜서로 활동하며 추가 수익을 창출하고 싶은 분",
                "교육 관련 사업을 시작하고자 하는 분"
            ]
        }
    ];

    const participationBenefits = [
        {
            icon: UserCheck,
            title: "개별 맞춤형 밀착 멘토링",
            items: [
                "참가자에게 전담 멘토 배정",
                "강의 기획 및 제작 과정에서 1:1 맞춤형 피드백 제공",
                "실무 경험이 풍부한 전문가와의 직접적인 상담 기회"
            ]
        },
        {
            icon: BookOpen,
            title: "실습 중심의 경험",
            items: [
                "강의 제작의 모든 과정을 직접 실습할 수 있는 기회 제공",
                "모의 강의 진행 및 동료 피드백을 통한 실제 강의 역량 강화"
            ]
        },
        {
            icon: FileText,
            title: "전문성 강화 자료 제공",
            items: [
                "강의 제작 관련 자료, 템플릿, 체크리스트 등 유용한 자료 제공",
                "최신 트렌드 및 기술 관련 자료에 대한 접근 권한 부여"
            ]
        }
    ];

    const programContent = [
        {
            week: "1",
            title: "개별 맞춤형 분석 및 목표 설정",
            items: [
                { title: "성향 및 장점 파악", description: "참가자의 개인적 특성과 강점을 분석하여 강의 방향 설정합니다." },
                { title: "자신의 강의 주제 선택", description: "각 참가자가 이루고자 하는 목표를 명확히 하고, 그에 맞는 주제 및 커리큘럼을 수립합니다." }
            ]
        },
        {
            week: "2",
            title: "강의 콘텐츠 개발",
            items: [
                { title: "커리큘럼 구성", description: "효과적인 강의 흐름과 내용을 체계적으로 직접 설계합니다." },
                { title: "자료 제작", description: "강의에 필요한 슬라이드, 동영상, 퀴즈 등 교육 자료를 직접 제작니다." }
            ]
        },
        {
            week: "3",
            title: "강의 제작 및 실습",
            items: [
                { title: "강의 촬영 및 편집 기술", description: "실제 강의를 촬영하고 편집하는 방법을 배우며, 실습을 통해 경험을 쌓습니다." },
                { title: "모의 강의 진행", description: "모의 강의를 진행하고 피드백을 받으며, 강의 스킬을 향상시킵니다." }
            ]
        },
        {
            week: "4",
            title: "마케팅 및 수익화 전략",
            items: [
                { title: "온라인 플랫폼 활용법", description: "강의를 온라인에 게시하고 판매하는 방법을 배우며, 실질적인 수익화를 준비합니다." },
                { title: "마케팅 전략 수립", description: "강의를 효과적으로 홍보할 수 있는 다양한 마케팅 기법 배우고 익힙니다." },
                { title: "수익화 모델 구축", description: "강의 판매 후의 다양한 수익화 전략과 관리 방법을 논의하고, 지속 가능한 수익 모델을 설계합니다." }
            ]
        }
    ];

    const completionBenefits = [
        {
            icon: Award,
            title: "공식 수료증 발급",
            description: "• 프로그램 수료를 인증하는 공식 수료증 발급\n• 이력서와 포트폴리오에 활용 가능\n• 강사로서의 경력을 공식적으로 증명할 수 있는 기회 제공"
        },
        {
            icon: Upload,
            title: "강의 콘텐츠 배포",
            description: "• 참가자가 제작한 강의를 온라인 플랫폼에 게시할 수 있는 권한 부여\n• 개인 브랜드 및 전문성을 널리 알릴 수 있는 기회 제공"
        },
        {
            icon: DollarSign,
            title: "수익화 기회",
            description: "• 제작한 강의를 통해 직접 수익을 창출할 수 있는 기회 제공\n• 다양한 수익화 모델(구독, 일회성 판매 등)에 대한 지속적인 지원"
        },
        {
            icon: Users,
            title: "멘토링 및 네트워킹",
            description: "• 프로램 종료 후에도 멘토와의 지속적인 관계 유지 가능\n• 참가자 간의 네트워킹 기회를 통해 협업 및 정보 공유 가능"
        },
        {
            icon: BookOpen,
            title: "추가 교육 및 리소스 제공",
            description: "• 후속 교육 프로그램에 대한 우선 등록 및 할인 혜택 제공\n• 최신 기술 및 트렌드에 대한 자료 및 정보 지속적으로 제공"
        },
        {
            icon: LifeBuoy,
            title: "지속적인 지원 프로그램",
            description: "• 프로그램 종료 후 지속적으로 멘토링 및 피드백 지원\n• 강의 판매 후 수강생들로부터 피드백을 받고, 이를 바탕으로 강의를 개선할 수 있는 기회 제공\n• 지속적인 자기 발전을 위한 리소스 및 자료 제공\n• 강의 판매 후 수익화 관련 추가 상담 기회 제공"
        },
        {
            icon: Users,
            title: "프라이빗 멤버십 커뮤니티 참여",
            description: "• 프로그램 수료 후 전용 커뮤니티에 참여하여, 선별된 멤버들과의 경험 공유 및 협업 기회 제공\n• 새로운 아이디어와 트렌드를 배우고 나눌 수 있는 공간 제공"
        },
        {
            icon: Zap,
            title: "AI 서비스 기획 솔루션 'method.' 이용 할인 혜택",
            description: "• AI 서비스 기획 솔루션 'method.'를 할인된 가격으로 이용할 수 있는 혜택 제공"
        },
        {
            icon: Code,
            title: "소스코드 거래 플랫폼 '코드룸' 이용 할인 혜택",
            description: "• 소스코드 거래 플랫폼 '코드룸'을 할인된 가격으로 이용할 수 있는 혜택 제공"
        }
    ];

    return (
        <div className="font-sans font-body">
            <Header />

            <Section title="프로그램 개요" bgColor="bg-gray-100" icon={Lightbulb}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 text-indigo-600 font-subheading text-left">여러분의 개발 지식을 수익으로 연결할 수 있는 기회를 제공합니다!</h3>
                    <div className="space-y-4 text-lg text-left mb-8">
                        <p>이 프로그램은 단순한 강의 제작을 넘어, 여러분이 가진 독창적인 경험과 전문성을 활용하여 시장에서 경쟁력 있는 강의를 만드는 과정을 지원합니다.</p>
                        <p>혼자서 강의를 만드는 건 쉽게 도전할 수 없는 어려운 과정입니다. 하지만 저희와 함께라면 여러분의 아이디어가 실제 수익으로 이어지는 놀라운 과정을 경험할 수 있습니다.</p>
                        <p>메타인지적 접근을 통해 자신의 학습과 강의 제작을 체계적으로 관리하며 자신이 성장하는 모습을 보게 되는 경험을 할 수 있습니다.</p>
                        <p>자신만의 색깔이 담긴 세상 어디에도 없는 독창적인 강의를 파이프코칭캠프에서 만드실 수 있습니다.</p>
                    </div>
                    <h4 className="text-xl font-semibold mb-6 text-left">이 프로그램은 여러분에게 다음과 같은 기회를 제공합니다:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <OpportunityCard 
                            title="자신의 목소리 내는 강사로 성장" 
                            description="여러분의 전문성을 기반으로 한 강의를 통해, 다른 사람들에게 가치를 전달하고 영향을 미치는 강사가 되어보세요."
                        />
                        <OpportunityCard 
                            title="실질적인 수익 창출" 
                            description="맞춤형 교육 콘텐츠를 통해, 지식을 나누는 동시에 안정적인 수익을 창출할 수 있는 방법을 배우게 됩니다."
                        />
                        <OpportunityCard 
                            title="네트워킹 및 멘토링 기회" 
                            description="경험이 풍부한 멘토의 지원을 받을 수 있고, 자신도 멘토가 되어 새로운 기회를 창출할 수 있습니다."
                        />
                    </div>
                    <p className="mt-6 text-lg font-semibold text-indigo-600 text-left">이제 여러분의 지식을 통해 새로운 가능성을 열어보세요!</p>
                    <p className="mt-2 text-lg text-left">이 여정은 여러분이 새로운 모습으로 성장하는 첫걸음이 될 것입니다.</p>
                </div>
            </Section>

            <Section title="운영진" bgColor="bg-white" icon={Users}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-2 text-indigo-600 text-left">김상훈</h3>
                        <p className="text-lg font-semibold mb-4 text-gray-700 text-left">비전 및 전략 수립 & 프로그램 운영 관리</p>
                        <ul className="text-gray-700 space-y-2 list-disc pl-5 text-left">
                            <li>(현) "파이프빌더" CEO</li>
                            <li>(현) 초월적 청년단체 "청년엔진" 의장</li>
                            <li>(전) 공연&전시 기획 스타트업 "CONTACT" 대표</li>
                            <li>(전) 건강한 식음료문화 프랜차이즈 "WEMIX(푸른세상협동조합)" 이사</li>
                            <li>(전) 건설 대기업 회계팀 근무</li>
                            <li>(전) 외국계 패션회사 인사팀 근무</li>
                            <li>(전) IT 대기업 품질관리팀 근무</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-2 text-indigo-600 text-left">이홍철</h3>
                        <p className="text-lg font-semibold mb-4 text-gray-700 text-left">강의제작 교육 & 기술지원 & 플랫폼 관리</p>
                        <ul className="text-gray-700 space-y-2 list-disc pl-5 text-left">
                            <li>(현) "파이프빌더" CTO</li>
                            <li>(현) 모바일 앱 개발 강의 컨텐츠 "홍드로이드" 유튜브 채널 운영</li>
                            <li>(현) Udemy, Inflearn, Class101 등 지식 공유자 활동</li>
                            <li>(전) IT 회사 소프트웨어 모바일 팀 근무</li>
                            <li>(전) 경기도 시흥시 청년 강사 활동</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section title="대상" bgColor="bg-gray-100" icon={Target}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {targetAudience.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex"
                        >
                            <TargetCard {...target} />
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section title="참여 혜택" bgColor="bg-white" icon={Gift}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {participationBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-lg"
                        >
                            <BenefitCard 
                                icon={benefit.icon} 
                                title={benefit.title} 
                                items={benefit.items}
                            />
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section title="프로그램 내용" bgColor="bg-gray-100" icon={BookOpen}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-12">
                        <h3 className="text-3xl font-bold mb-6 text-indigo-600 font-subheading">프로그램 운영 안내</h3>
                        <ul className="list-disc pl-5 space-y-4 text-gray-700 font-body text-lg">
                            <li>기본 주 1회 2시간씩, 4주 수료 프로그램입니다.</li>
                            <li>시작 날짜, 시간은 사전 인터뷰 후 결정됩니다.</li>
                            <li>해당 커리큘럼은 예시로, 참가자에 맞춰 변경될 수 있습니다.</li>
                        </ul>
                    </div>
                    <div className="space-y-12">
                        {programContent.map((week, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <WeeklyContent {...week} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section title="수료 혜택" bgColor="bg-white" icon={Award}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {completionBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CompletionBenefitCard {...benefit} />
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section bgColor="bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                    <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg mb-6 -mx-8 -mt-8">
                        <h3 className="text-3xl font-bold flex items-center justify-center">
                            <CreditCard className="w-10 h-10 mr-4" />
                            참가비
                        </h3>
                    </div>
                    <p className="text-2xl mb-4">
                        <span className="line-through text-gray-500">55만원</span>
                    </p>
                    <p className="text-5xl font-extrabold text-indigo-600 mb-6">
                        33만원
                    </p>
                    <p className="text-xl text-indigo-600 font-semibold mb-4">
                        한시적 얼리버드 할인 이벤트 진행 중!
                    </p>
                    <p className="text-lg text-gray-600">
                        얼리버드 종료 이후 정상가 → <span className="font-semibold">55만원</span>
                    </p>
                </div>
            </Section>

            <JoinNowSection />

            <ContactSection />

            <SmallSection title="환불 규정 안내" bgColor="bg-gray-50" icon={RefreshCcw}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600 mb-4 text-center italic">
                        환불 신청 시 학원법 규정에 따라 강의 참여 횟수에 따른 환불금이 적용됩니다.
                    </p>
                    <ul className="list-none space-y-2 text-sm">
                        {[
                            { period: "캠프 시작 전", refund: "100% 환불" },
                            { period: "1/3 경과 전 (시작 후 10일 전까지)", refund: "2/3 금액 환불" },
                            { period: "1/2 경과 전 (시작 후 14일 전까지)", refund: "1/2 금액 환불" },
                            { period: "1/2 경과 후 (2주 코스 후)", refund: "환불 불가" }
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                                <span className="w-4 h-4 bg-gray-200 rounded-full mr-2 flex-shrink-0"></span>
                                <span><span className="font-medium">{item.period}:</span> {item.refund}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </SmallSection>

            <FAB />

            <footer className="bg-gray-800 text-white py-8 text-center font-body">
                <p>&copy; 2024 파이프 코칭 캠프. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;