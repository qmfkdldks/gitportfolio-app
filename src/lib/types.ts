interface IDeveloperDict {
  [key: string]: {
    ko: {
      title: string;
      description: string;
    };
  };
}

const developer_types: IDeveloperDict = {
  "1": {
    ko: {
      title: "UI UX 아티스트 형",
      description: `특징: 프론트엔드 코드 변경이 잦음, 디자인 
자산 파일이 많음

설명: 코드로 아름다움을 창조하는 개발자,
픽셀 하나에도 심혈을 기울임`,
    },
  },
  "2": {
    ko: {
      title: "테스트 광신도형",
      description: `특징: 테스트 코드 라인 수가 실제 코드보다 많음, TDD 실천

설명: "테스트 없인 잠들 수 없다"가 
좌우명인 개발자, 버그를 미리 잡는 예언자`,
    },
  },
  "3": {
    ko: {
      title: "API 마에스트로형",
      description: `특징: API 관련 프로젝트가 많음, 다양한 인터페이스 설계

설명: 시스템 간 소통의 달인, RESTful한 세상을 꿈꾸는 개발자`,
    },
  },
  "4": {
    ko: {
      title: "빌드 마스터형",
      description: `특징: CI/CD 설정 파일 변경이 잦음, 자동화 스크립트가 많음

설명: 개발 프로세스 최적화에 열정적인 개발자, 버튼 하나로 세상을 움직임`,
    },
  },
  "5": {
    ko: {
      title: "문서화의 달인형",
      description: `특징: README.md 파일이 항상 잘 
    정리됨, 위키 페이지 활발한 업데이트
    
    설명: 코드만큼 문서화를 중요하게 여기는 개발자, 동료들의 영원한 은인`,
    },
  },
};

export default developer_types;
