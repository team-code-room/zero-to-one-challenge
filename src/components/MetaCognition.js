import React from 'react';
import { Brain } from 'lucide-react';

const MetaCognition = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Brain className="w-12 h-12 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-center">메타 인지의 중요성</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            메타 인지란 '생각에 대한 생각' 또는 '인지에 대한 인지'를 의미합니다. 
            즉, 자신의 사고 과정을 인식하고 조절하는 능력을 말합니다.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            파이프 코칭 캠프에서는 이 메타 인지 능력을 개발하는 것에 중점을 둡니다. 
            왜냐하면 메타 인지는 학습 효율성을 크게 향상시키고, 문제 해결 능력을 높이며, 
            자기 주도적 학습을 가능하게 하기 때문입니다.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            강의를 제작하는 과정에서 여러분은 자연스럽게 메타 인지 능력을 키우게 됩니다. 
            내용을 설명하기 위해 자신의 지식을 정리하고, 
            다른 사람의 입장에서 생각하며, 
            효과적인 전달 방법을 고민하는 과정 모두가 메타 인지를 활용하는 것입니다.
          </p>
          <p className="text-lg text-gray-700">
            이러한 메타 인지 능력의 향상은 단순히 강의 제작에만 도움이 되는 것이 아닙니다. 
            프로그래밍, 문제 해결, 자기 계발 등 삶의 모든 영역에서 
            여러분의 능력을 한 단계 끌어올리는 핵심 역량이 될 것입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetaCognition;