import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  return (
<div>
	<div className = "introduction0">
		Blog made from LA.IV DATA laboratory's internship......By Sangha Yoon
	</div>
    <div className = "main">
	<div className = "item">
		<div className = "introduction1">
			September in 2022
		</div>
		<div>
			<ul>
				<li>나는 이민정 선생님한톄  왜 내가 정말로 LA.IV DATA 회사에 가는 지 이야기 했다. 가고 싶은 이유는 Netcentric를 더 잘하고 싶다. 드디어 내가 직원이 될수 있는 자격을 받았다. </li>
				<br />
				<li>나, 윤상하는 드디어 새로운 앱사이트를 발견했다. 이것은 바로 "LearnFit" (https://www.learnfit.ai/). 이 사이트는 공부 보충을 하고 싶은 학생들을 위해서 배우기 쉬운 학습노트와 러닝패스를 가르쳐준다.</li>
				<br />
				<ol>
					<li><u>학습노트</u>: 유투브 비디오 링크를 이용해서 보충 수업을 만든다. 비디오 영상 각각 시간에 메모를 한다. 그래야 더 이해가 잘 된다. 영상을 보지 않아도 내용을 습득할 수 있습니다. </li>
					<br />
					<li><u>러닝패스</u>: 이것은 교과서 책처럼 여러 학습들이 들어간다. 그리고 쉽게 말하자면 여러 학습노트가 들어가 있다. 또, 런핏에서 학습한 다른 사람의 노트도 한 러닝패시에 담을 수 있습니다. </li>
					<br />
					<li>나는 학습노트와 러닝패스를 어떻게 제작하는 방법을 배웠다. 나만의 학습노트는 C++의 arrays, C++의 pointers, C++의 Linked lists, Entity Relationship Diagram (ERD) 등등. 나만의 러닝패스는 SQL (Structured Query Language)의 databases와 C++의 basic data structures이다. </li>
					<br />
				</ol>	
				<li>나는 새로운 프로그래밍 언어 React을 공부하기 시작했다.</li>
				<br />
				<li><u>React를 처음으로 보면서 어떻게 생겼는지 알아봤다.</u> React is a Javascript library for building user interfaces. Does it have declarative components? Yes!!! </li>
				<br />
				<li>나는 React를 기초적으로 알게 되었지만 React으로 만들수 있는 프로그램을 내가 직접 설치를 해야했다. 어떻게 하냐면 react 만들기 프로그램을 terminal에 설치하는 것이다.</li>				    <br />
				<li>React의 스타일을 마음껏 바꿀수 있다. 나는 여러번 했다.</li>
				<br />
				<li>While passing props to a component, React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. </li>
				<br />
			</ul>
		</div>
	</div>
	<div className = "item">
		<div className = "introduction2">
			October in 2022
		</div>
		<div>
			<ul>
				<li>나는 React의 언어로 되어있는 currency converter를 만들었다. 그리고 React를 계속 배우고 있다. React안에 있는 기능들이 HTML이  가지고 있는 것들과 똑같다. 하지만 만들 위치가 좀 다를 뿐이다. 예를 들면 HTML Main Program을 그냥 규제없이 잘 쓰면된다. 하지만 React Main Program은 꼭 function 안에 써야한다.</li>
				<br />
				<li>하지만 React는 C++하고 많이 다르다. 왜냐하면 React의 구조는 곧 HTML를 나타내는 것이다.</li>
				<br />
				<li>우리 회사가 앱사이트 프로그램을 개발을 하고 있다. 뭐냐면 이것이 학습 교과서 이름들을 저장을 하는 것이다. 나에게 그것의 front-end를 고치는 일이 주어졌다. 나는 김남빈 선생님의 설명을 자세히 들었었다 (어떻게 고쳐야 하는지...). 그리고나서 나 덕분에 앱사이트의 front-end가 잘 완성했다. 결과는 우리 회사 앱사이트가 사회에서 인정을 받았다. </li>
				<br />
				<li>10월의 미니 프로젝트들</li>
				<br />
				<ol>
					<li>미니 블로그: 글 작성 화면, 메인 화면, 글 보기 화면</li>
					<li>메로리 게임 카드 만들기</li>
				</ol>
				<br />
				<li>React에 javascript가 들어가있다. 왜냐하면 javascript array를 다루는 방법들이 여러가지가 있다. React에 array들이 들어가는 거가 정상이다. 이 array들을 다루는데 8 가지 방법들이 있다.</li>
				<br />
				<ol>
					<li>map: Array에 있는 모든 elements들을 다 차례대로 보여주기.</li>
					<br />
					<li>filter: 만약 array에 있는 elements들이 만족하는 성격을 보여준다면 결과는 condition에서 만족할 수 있는 elements들을 결과에 보여준다.</li>
					<br />
					<li>find: Condition에 만족할수 있는 element가 하나 있으면 true. 아니면 false.</li>
					<br />
					<li>forEach: map과 비슷한 기능들을 가지고 있다.</li>
					<br />
					<li>some: find와 비슷함.</li>
					<br />
					<li>every: some하고 같지만 모든 element들이 condition에 만족해야한다. 그래야 결과가 true다.</li>
					<br />
					<li>reduce: 모든 element들의 int variable들을 다 합해서 결과를 보여준다.</li>
					<br />
					<li>includes: 정말 array에 새로운 element를 더해준다.</li>
					<br />
				</ol>
			</ul>
		</div>
	</div>
	<div className = "item">
		<div className = "introduction3">
			November in 2022
		</div>
		<div>
			<ul>
				<li>11월이 시작하자마자 새로운 일들이 쏟아지기 시작했다. 하지만 첫번째 일은 React hooks에 대해 공부를 하는 것이다. 하지만 그것들은 보통 코드들이 아니다. 그것들은 React code가 Javascript code 없이 자신의 기능들을 변화시킬수 있도록 도와주는것이다.</li>
				<br />
				<li>Benefits of React hooks </li>
				<br />
				<ol>
					<li>It is hard to reuse stateful logic between components. However, with hooks, I can extract stateful logic from a component so it can be tested independently and reused. </li>
					<br />
					<li>Complex components become hard to understand. With hooks, I can split one component into smaller functions, which are very easy to analyze and understand.</li>
					<br />
					<li>Classes confuse both people and machines. Fortunately, hooks let me use more of React's features without classes.</li>
					<br />
				</ol>
				<li>React Hook들안에서 우리가 기초적으로 알아야 할 것들이 있다. 바로, useState, useEffect, useRef, useContext.</li>
				<br />
				<li>내가 가장 많이 쓰고 있는 hook이 useState이에요. 그 덕분에 2023년에 만들기도 불가능해 보이는 function들을 만들 수 있었어요.</li>
				<br />
				<div style = {{backgroundColor: "yellow"}}>
				<li>두 번째 일은 내가 TypeScript, JavaScript, React를 비교하는 것이다.</li>
				<br />
				<li>공통점은 모두 셋 다 function 바깥에 variable들을 initialize 할 수 있다.</li>
				<br />
				<li>그 사이에 차이점들이 다양하다. TypeScript는 editor support를 React보다 더 잘 고쳐나간다. 어떻게 error가 나는지 정확하게 보여준다.또 그 언어가 syntax for types를 가지고 있다. 하지만 JavaScript는 그것을 가지고 있지 않다.</li>
				<br />
				<li>나는 TypeScript가 JavaScript, React보다 더 좋다는 말은 하지 않는다. TypeScript에도 약점이 있다. 바로 TypeScript code가 배우기에 더 어려울 수가 있다.</li>
				</div>
				<br />
				<li>마지막에는 배열 렌더링 (list.map())을 이용해서 LA.IV DATA 회사에서 개발한 앱사이트를 정리했다. 쉽게 말하자면 나는 김남빈 선생님이 준 리스트를 이용해서 정리 테이블을 만들었다.</li>
			</ul>
		</div>
	</div>
	<div className = "item">
		<div className = "introduction4">
                        December in 2022
                </div>
                <div>
                        <ul>
                                <li>나는 이번 달에 많이 배웠다. 많이 인상 깊었던 것들은 display: flex하고 display: grid이다.</li>
				<br />
				<li>이것들은 안 속에 있는 모든 아이템들의 정리를 바꾼다. 도움이 될 수도 있다. 왜냐하면 보통 HTML로 정리를 할 수 없는 일을 도와준다. 또, 공간도 절약할수있어 다른 요소들을 불편없이 넣을 수가 있다.</li>
				<br />
                                <li>하지만 나는 긍정적인 공부를 했다. 바로 학습 게임 앱사이트였다.</li>
				<br />
				<ol>
					<li>For flex, the website's name is Flexbox Froggy.</li>
					<br />
					<li>For grid, the website's name is grid garden.</li>
					<br />
				</ol>
				<li>그 앱사이트 덕분에 flex, grid를 잘 이해하게 되었다. 그 전에는 게임의 그림 없이 쉽게 소화할수가 없었다.</li>
				<br />
				<li>Flex로 아이템들을 정리하는 데 많은 property들이 들어 있습니다.</li>
				<br />
				<ol>
					<li>justify-content: aligns items horizontally</li>
					<br />
					<li>align-items: aligns items vertically</li>
					<br />
					<li>flex-direction: defines the direction items are placed in the container</li>
					<br />
					<li>order: decide where an individual item is supposed to be in the order</li>
					<br />
					<li>flex-wrap: Should all of items appear in a single line or not from a website?</li>
					<br />
					<li>flex-flow: a combination of flex-direction and flex-wrap</li>
					<br />
					<li>align-content: to set how multiple lines are spaced apart from each other</li>
					<br />
				</ol>
				<li>Grid는 Flex보다 더 정리가 잘 되어있다. 왜냐하면 이 Grid에서는 모든 아이템들이 가로 세로 둘 다 정리되어져있다.</li>
				<br />
				<li>하지만 내가 이미 Frontend Developer에 시작한 상태이다. 바로 CSS의 Making Layouts category에 Grid, Flex 공부가 있기 때문이다.</li>
				<br />
				<li>얼마 후 이제 Frontend Developer website 직접 시작했다.</li>
				<br />
				<li>Frontend Developer website에서 내가 한 학습들은 HTML, CSS, JavaScript와 관련이 되어있다.</li>
                        </ul>
                </div>		
	</div>
	<div className = "item">
		<div className = "introduction5">
                        January in 2023
                </div>
                <div>
                        <ul>
                                <li>Frontend Developer website에서 공부를 한 후 이제 본격적으로 React Hook들을 공부하기 시작했다.</li>
				<br />
                                <li>React Hook들과 같은 useState, useEffect, useRef 등등은 자기만의 기능들을 가지고 있다. 하지만 특별한 hook들은 그냥 function일뿐 기능을 스스로 가지고 있지 않다. 그래서 자기의 이름에 맞춘 기능을 가지려면 useState 아니면 useEffect에 의지해야한다.</li>
				<br />
				<li>자, 살펴볼까?!</li>
				<br />
				<li>useState를 사용하는 React Hooks</li>
				<br />
				<ol type = "a">
					<li>useInput: 이것은 input에 규정을 짓는다.</li>
					<br />
					<li>useTabs: tabs을 사용하기에 쉽게 만들수 있습니다.</li>
					<br />
				</ol>			
				<li>useEffect를 사용하는 React Hooks</li>
				<br />
				<ol type = "a">
					<li>useTitle</li>
					<br />
					<li>useClick</li>
					<br />
					<li>usePreventLeave</li>
					<br />
					<li>useConfirm</li>
					<br />
					<li>usePreventLeave</li>
					<br />
					<li>useBeforeLeave</li>
					<br />
					<li>useFadeIn</li>
					<br />
					<li>useNetwork</li>
					<br />
					<li>useScroll & useFullscreen</li>
					<br />
					<li>useNotification</li>
					<br />
					<li>useAxios</li>
					<br />
				</ol>
				<li>그 다음에는 나에게 큰 일이 주어졌다. 자신만의 유투브 앱사이트를 만드는 것이었다. 첫번째 단계는 김남빈 선생님이 준 비디오를 따라하는 것이다. 사실 비디오에는 HTML를 이용해서 유투브앱사이트를 만든다. 내가 비디오를 따라가기가 힘들었다. 엄청난 집중과 열정이 필요하기 때문이다.</li>
				<br />
				<li>만든 다음에는 내가 만든 프로그램의 언어를 React로 바꾸는 것이다. 여러가지 바꾸는 과정이 필요했다. Bootstrap, style, importing a video and an audio player 등등</li>
				<br />
				<li>언어를 바꾸는 데 성공을 했다. 이제 나의 React website에 발전을 시키는 것이다. 예를 들면 Like, Display 버튼을 만드는 것이다. 확실히 작동하려면 뭔가 React Hook 있어야 한다.</li>			
                        	<br />
				<li>이 엄청난 과정에서 내가 React 언어의 contextmenu와 modal component 그리고 hovervideoplayer을 경험했다.</li>
			</ul>
                </div>
	</div>
	<div className = "item">
		<div className = "introduction6">
                        February in 2023
                </div>
                <div>
                        <ul>
                                <li>나의 유투브 앱사이트를 잘 수정을 했다.</li>
				<br />
                                <li>그리고 나의 앱사이트를 Github으로 올렸다. 그리고 내것을 Github page로 만들었다.</li>
                        </ul>
                </div>
	</div>
	<div className = "item">
		<div className = "introduction7">
                        March in 2023
                </div>
                <div>
                        <ul>
                                <li>TypeScript를 좀 배우긴 했지만 드디어 나만의 유투브 앱시아트 완성!!!!!!</li>
				<br />
				<li>마지막으로 Github README.md를 이용해서 나의 유투브 프로젝트를 설명을 했다.</li>
                        </ul>
                </div>
	</div>
    </div>
</div>
  );
}

export default App;
