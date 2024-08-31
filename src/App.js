import React from 'react';

const Header = () => (
  <header className="bg-indigo-600 text-white py-20 text-center">
    <h1 className="text-4xl font-bold mb-4">제로투원 챌린지 (Zero To One Challenge)</h1>
    <p className="text-xl max-w-2xl mx-auto">
      "30일 간의 온라인 개발 강의 제작 판매로 수익화 실현"
    </p>
  </header>
);

const Section = ({ title, children, emoji }) => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        {emoji && <span className="mr-2 text-2xl">{emoji}</span>}
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const Timeline = ({ steps }) => (
  <div className="relative">
    {steps.map((step, index) => (
      <div key={index} className="mb-8 flex">
        <div className="flex flex-col items-center mr-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white">
            {index + 1}
          </div>
          {index !== steps.length - 1 && <div className="h-full w-px bg-indigo-500 my-2" />}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="mt-1 text-gray-600">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const App = () => {
  const programSteps = [
    { title: "사전 인터뷰", description: "온보딩 및 킥오프 인터뷰 진행" },
    { title: "1주차", description: "강의 계획서 작성" },
    { title: "2주차", description: "강의 커리큘럼 목록 세팅 및 영상 촬영" },
    { title: "3주차", description: "강의 영상 편집" },
    { title: "4주차", description: "강의 제작 완료 및 플랫폼 런칭" },
  ];

  const benefits = [
    { title: "수익 공유", description: "온라인 강의 플랫폼 강의 판매 수익 쉐어" },
    { title: "마케팅 지원", description: "자사 인플루언서 & 온라인 채널 활용 마케팅" },
    { title: "컨설팅 제공", description: "실전 프로젝트 웹 / 앱 서비스 출시 컨설팅 제공" },
    { title: "지속적 관리", description: "출시 이후 지속적인 강의 유지보수 & 수익창출 관리" },
    { title: "무료 강의", description: "양질의 다양한 강의 수강권 무료 지급" },
  ];

  return (
    <div className="font-sans">
      <Header />
      
      <Section title="제로투원 챌린지란?" emoji="🚀">
        <p className="text-lg text-gray-700 mb-4">
          제로투원 챌린지는 기존의 개발자들이 단순히 코딩에만 몰입하거나,
          개발적인 부분에 사로잡혀서 자신의 잠재력을 찾을 여유가 없는 분들을 위해 준비한 챌린지 프로그램입니다.
        </p>
        <p className="text-lg text-gray-700">
          이번 프로그램을 통해서 개발자라는 직업은 단순히 출발점이었고, 그 너머엔 자생할 수 있는 무한한 가능성들이 준비되어있다는 것을 알려드리고 싶습니다.
        </p>
      </Section>

      <Section title="프로그램 진행 과정" emoji="🔽">
        <Timeline steps={programSteps} />
      </Section>
      
      <Section title="챌린지 성공 혜택" emoji="✅" className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </Section>
      
      <Section title="참가 정보" emoji="💰">
        <div className="bg-indigo-100 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-2">참가비</h3>
          <p className="text-lg"><span className="line-through">24만원</span> → <span className="font-bold text-indigo-600">22만원</span> (얼리버드 할인가)</p>
          <p className="text-sm text-gray-600 mt-2">얼리버드 종료 이후 정상가 → 24만원</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">환불 규정</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>오프라인 인터뷰 진행 이후 진행의사 없을 시 100% 환불</li>
            <li>강의 계획서, 커리큘럼 작성 후 프로젝트 착수 이전 중도 포기 시 70% 환불</li>
            <li>강의 영상 촬영 또는 편집 과정 중도 포기 시 50% 환불</li>
            <li>강의 최종 패키징 작업 중도 포시 시 30% 환불</li>
            <li>프로젝트 수행기간 내에 이틀 이상 잠수 시 환불 불가</li>
          </ul>
        </div>
      </Section>
      
      <Section title="지금 바로 참여하세요!" emoji="👥" className="bg-indigo-600 text-white text-center">
        <a 
          href="https://forms.gle/VoZrPH2w4mU445Hy9" // 실제 신청 링크로 변경해주세요
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition duration-300"
        >
          제로투원 챌린지 신청하기
        </a>
      </Section>
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 제로투원 챌린지. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;