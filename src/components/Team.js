import React from 'react';
import hongdroidImage from '../assets/images/hongdroid.jpg';  // 이미지 import

const TeamMember = ({ name, role, experience, imageUrl }) => (
  <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
    <img
      src={imageUrl}
      alt={name}
      className="w-48 h-48 rounded-full mb-6 object-cover"
    />
    <h3 className="text-3xl font-bold mb-3">{name}</h3>
    <p className="text-xl text-gray-600 mb-4">{role}</p>
    <ul className="text-lg text-gray-700 list-disc list-inside">
      {experience.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const Team = () => {
  const teamMember = {
    name: '이홍철 (홍드로이드)',
    role: '개발 프리랜서 겸 사업가',
    experience: [
      '모바일 앱 강의 Youtube 채널 \'홍드로이드\' 운영 중 (구독자 약 2만명)',
      '클래스 101, 클래스유, 인프런, 구름에듀, 유데미 등 온라인 강의 플랫폼에 IT 개발 클래스 런칭',
      '시흥시 청년강사 프로그램 \'누구나 할 수 있는 앱 만들기\' 강사 활동 경험',
    ],
    imageUrl: hongdroidImage,  // import한 이미지 사용
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">파이프 코칭 캠프 - 코치진 소개</h2>
        <TeamMember {...teamMember} />
      </div>
    </section>
  );
};

export default Team;