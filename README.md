# wanted-pre-onboarding-frontend-challenge-19

## 목록
- 안내사항
- 과제 공통 세팅
- 과제 1
- 과제 2


## 안내사항
과제 세팅에 맞춰 과제를 수행해주세요. 세팅값에 맞지 않는 프로젝트는 과제 확인이 불가능합니다. 과제 제출 전에 확인하고 제출 부탁드립니다.

- [0] create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- [0] 아래 과제 공통 세팅의 폴더 구조를 확인합니다.
- [0] 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 [issues](https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/issues)에 올리면 됩니다.
- [0] 과제물은 main 브랜치에 올립니다.
- [0] 프로젝트는 node version 20에서 실행할 수 있어야합니다.
- [0] Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- [0] 함수형 컴포넌트를 사용해 코드를 짜주세요.



## 과제 공통 세팅
- cra로 과제를 수행하기 위해서는 node.js와 npm이 설치 되어있어야 합니다.
- 폴더 구조는 가능한 아래 양식을 맞춰주세요.
- 스타일은 tailwind, styled-component, scss등 자유롭게 설정하시면 됩니다.
- 아래 폴더와 파일은 필수 요소입니다. 나머지는 자유롭게 설정해주세요.
```
/src
  /components
    /List
  /store
  App.tsx
  index.tsx
```


## 과제 1 todo list 만들기
Add와 Delete 기능 2 가지를 만듭니다.
1. input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
2. 각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다. 

<img src="https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/blob/main/todoListAssignment.png" width="500" >

- 디자인은 자유롭게 해도 됩니다. 위의 2가지 버튼과 그에 따른 기능이 있으면 됩니다.
- 가능하면 컴포넌트를 만듭니다. (작은 단위라도 좋습니다.)
- 전역상태를 관리해주세요.(가능한 Redux나 Redux-toolkit을 이용해주세요.)



## 과제 2
질문을 읽고 답해주세요. 본인이 알고 있는 만큼 답변해주시면 됩니다. 

1. DOM과 Virtual DOM을 설명해주세요.
2. 리액트의 특징을 설명해주세요.
3. flux 패턴에 대하여 설명해주세요.
4. 상태관리에 대하여 설명해주세요.
5. 궁금한 것에 대하여 알려주세요. 


# ✅ 제출🧑🏻‍💻
# 과제1
https://github.com/GyunHeee/preonboard-frontend-march?tab=readme-ov-file

# 과제2
## DOM과 Virtual DOM을 설명해주세요.

### DOM이란? 
Document Object Model의 약자로 번역하면 문서 객체 모델입니다. 여기서의 문서는 <body>, <p>와 같은 html 문서 태그를 의미하고, javascript가 이용할 수 있는 객체로 만들면 그것을 문서 객체라고 합니다.
즉, 이것을 정리하면 DOM은 웹 브라우저가 HTML을 인식하는 방식입니다. 이 것을 더 구체적으로 얘기하면 DOM은 웹 페이지 (HTML, XML)의 내용과 구조, 스타일 요소를 구조화 시켜 프로그래밍 언어가 해당 문서에 접근하여 읽고 조작할 수 있도록 API를 제공하는 인터페이스입니다.

### virtural DOM이란?
### 등장배경
DOM이 업데이트될 때마다 render트리를 재생성하고 리플로우와 리페인트를 수행해야합니다. 이렇게 직접 DOM을 조작하게 되면 성능 문제가 발생할 수 있습니다. 이러한 문제를 해결하기 위해 등장한 개념이 virtaul DOM입니다.
virtual DOM은 실제 DOM을 추상화한 가상의 트리 구조입니다. React와 같은 라이브러리 및 프레임워크에서 주로 사용됩니다.

### 작동과정
여기서 항상 두개의 가상돔 객체를 가지고 있습니다.

렌더링 이전 화면 구조를 보여주는 가상돔
렌더링 이후 화면에 나타날 구조를 보여주는 가상돔
 
### virtual DOM의 작동과정은 다음과 같습니다.

가상 DOM 구성: UI의 현재 상태를 표현하는 가상의 트리가 메모리에 생성됩니다. 이 트리는 실제 DOM 구조를 미러링하며, 각 요소에 대한 정보를 포함합니다. 리액트의 경우 state가 변경될 떄마다 리렌더링이 발생하는데, 이 시점마다 새로운 내용이 담긴 가상돔이 생성됩니다. 실제 브라우저 UI가 그려지기 전에 말입니다.
상태 변경 감지: 사용자 상호작용 또는 데이터 변경과 같은 이벤트로 인해 UI가 업데이트되어야 할 때, 새로운 가상 DOM 트리가 이전 상태와 비교됩니다.
차이(diffing) 계산: 이전 가상 DOM과 새로운 가상 DOM을 비교하여 변경된 부분을 식별합니다. 이를 통해 어떤 부분이 실제 DOM에 적용되어야 하는지를 알 수 있습니다.
가상 DOM 업데이트: 변경된 부분만을 실제 DOM에 반영합니다. 이때, 실제 DOM을 직접 조작하는 대신 가상 DOM을 조작하고 업데이트된 부분만 실제 DOM에 적용합니다.
실제 DOM 업데이트: 변경된 부분만이 실제 DOM에 반영됩니다. 이로써 브라우저가 리플로우와 리페인트를 최소화하고 효율적인 UI 업데이트가 이루어집니다. 즉 변경된 Element를 별개로 그려주는 것이 아니라, 변경된내용을 한 번에 받아와 실제 DOM에 적용해주는 것 때문에 효율적인 업데이트가 가능합니다.
 
다음과 같은 방식으로 virtual DOM은 무거운 DOM 조작 작업을 효율적으로 처리할 수 있습니다. 하지만 최신 SPA처럼 인터렉션이 많은 앱의 경우 Virtaul DOM이 빠를 수 있지만 상호작용이 없는 정적 페이지의 경우 오히려 더 느릴 수 있습니다.

# 리액트의 특징
* Virtual DOM
  * 위에서 말했듯 리액트는 virtual DOM을 사용합니다. 이를 통해 실제 DOM 조작을 최소화하여 효율적인 업데이트를 하도록 합니다.
* 컴포넌트 기반 아키텍처
  * 리액트는 컴포넌트 기반 아키텍처를 채택해 UI를 독립적이고 재사용 가능한 작은 조각들로 나눕니다. 이를 통해 유지보수 및 재사용성을 높이고 코드를 구조화하기 수월합니다.
* 단방향 데이터흐름
  * 단방향 바인딩은 데이터 흐름이 한 방향으로만 이루어지는 데이터 바인딩 방식입니다. 간단하게 설명하면 양방향 바인딩(AngularJs, Vue.js)은 element에 데이터를 바인딩하면 Js코드로 데이터를 변경할 수 있고 element값을 수정해서 데이터를 변경할 수도 있습니다.
  * 하지만 React의 단방향 바인딩은 Javascript에서 HTML로만 데이터 바인딩이 가능합니다. 즉, HTML element에서 바인딩한 데이터를 js에서 수정할 경우 화면 반영되지만, 화면에서 직접 해당 element의 값을 바꾸는 경우는 js가 수정되지 않습니다.
  * 즉 정리하면 . 양방향 바인딩은 데이터의 변경과 UI 요소의 상태 변경이 서로 영향을 주어 동시에 업데이트됩니다. 단방향 바인딩은 데이터의 변경이 UI로 전달되어 화면을 업데이트합니다.
  리액트는 단방향 바인딩을 채택하고 있기에 데이터의 흐름이 예측 가능하고 디버깅이 쉽다는 것입니다. 또한 어플리케이션의 상태 변화를 추적하기 쉽고, 코드의 복잡성이 줄어들 수 있습니다.
* JSX 문법
  * 리액트는 javascript와 xml을 조합한 jsx문법을 사용합니다.

# flux 패턴에 대하여 설명해주세요.
Flux는 Facebook에서 개발된 애플리케이션 아키텍처 패턴 중 하나입니다. React와 함께 사용하기 위해 고안된 Flux 패턴은 단방향 데이터 흐름을 강조하며, 복잡한 사용자 인터페이스를 가진 웹 애플리케이션을 구축하기 위한 구조적인 접근 방식을 제공합니다.

 ### 등장 배경 
기존의 MVC 패턴에서는 데이터가 양방향으로 흐르기 때문에 View를 통해 데이터를 입력하면 Model을 업데이트할 수 있었습니다.

이렇게되면 많은 상호작용을 하는 어플리케이션에서는 View가 여러개의 model을 동시에 업데이트하고 Model 또한 여러개의 view에 데이터를 전달하게 되면 복잡한 데이터 흐름을 가지게 됩니다. 이는 일관성있게 데이터를 관리하기도 프로그램을 예측하기도 어려워지기 때문에 페이스북에서 단방향 데이터 흐름을 가지는 Flux 패턴을 고안해냈습니다.

Flux는 Action이 만들고 Action을 Dispatcher에 전달하여 Store의 데이터를 변경한 뒤 View에 반영하는 단방향 데이터 흐름의 어플리케이션을 만드는 아키텍처입니다.

* 액션 (Action): 사용자의 입력 또는 시스템에서 발생하는 이벤트를 나타내는 객체입니다. 액션은 어떤 일이 일어났는지 설명하고, 데이터를 전달할 수 있습니다.
* 디스패처 (Dispatcher): 액션을 받아서 스토어에 전달하는 역할을 합니다. 애플리케이션에서 하나의 디스패처가 있고, 액션이 발생하면 디스패처를 통해 스토어로 전달됩니다.
* 스토어 (Store): 애플리케이션의 상태를 저장하고, 상태의 변경에 응답하여 뷰에게 알리는 역할을 합니다.
* 뷰 (View): 사용자에게 보이는 부분으로, 스토어의 상태를 기반으로 UI를 업데이트합니다.

따라서 FLUX 패턴은 단방향 데이터 흐름을 채택하기 때문에 어플리케이션의 상태 변화를 예측하기 쉽고, 디버깅이 간편해집니다. 이를 통해 코드의 유지보수성을 높이고 복잡도를 단순화할 수 있습니다.

# 상태관리란?
### 상태란? 
* 어플리케이션의 데이터와 UI 상태를 의미합니다. UI 상태는 사용자 인터페이스의 상태를 나타내며, 데이터 상태는 어플리케이션에서 사용되는 데이터의 값들을 나타냅니다.
* 데이터 상태를 업데이트하면 화면에 반영되어야합니다. 상태가 업데이트 될 때마다 개발자가 직접 DOM요소를 조작해 업데이트 하는 방식은 많은 문제가 발생해 많은 프론트엔드 라이브러리 및 프레임워크는 DOM을 업데이트하는 방식을 해결했습니다. 리액트는 가상 DOM을 사용하여 직접적인 DOM에 접근하는 것을 지양하며, useState훅을 사용한 상태가 변화될 때 리렌더링을 통해 가상 DOM을 업데이트하고 변경된 부분만 실제 DOM에 반영하는 방식으로 상태의 변경에 따른 DOM업데이트를 지원하고 있습니다. 
* 상태는 프론트엔드 어플리케이션에서 중요한 역할을 담당하며 그렇기 때문에 상태를 효율적으로 관리하고 업데이트 하는것이 매우 중요합니다.  따라서 이를 위해 상태 관리 기술과 패턴을 사용합니다. 

### 상태관리란?
* 상태관리란 이런 상태들을 효과적으로 관리하는 것을 말합니다. useState를 통해 컴포넌트 내에서 로컬 상태관리가 용이해졌지만, 여전히 복잡한 상태관리를 하기에는 무리가 있었습니다. 또 한 컴포넌트 내의 상태를 사용할 때 prop drilling문제도 발생했습니다.
* 이를 해결하고자 리액트에서 제시한 Context api가 있습니다. Context api를 통해 컴포넌트 트리 전체에서 전역적으로 데이터를 공유하는 방식이 가능해졌습니다. 또한 중간 컴포넌트를 거치지 않고 하위 컴포넌트로 데이터를 전달 할 수 있어 앞서 나온 문제점을 해결할 수 있었습니다.
* 또한 Redux, Mobx, zustand 등의 라이브러리를 활용하면 중앙저장소에 공유되는 상태를 읽고 업데이트할 수 있습니다. 이를 통해 상태를 효율적으로 간리할 수 있으며, 컴포넌트 간에 상태를 공유할 수 있습니다. 

