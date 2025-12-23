import Hero from "./Hero.js";

// ⚔️ Chapter 2. 상속과 다형성 (직업 선택)
// Q4. [전직] 전사(Warrior) 클래스 (상속의 시작)
// 기본 Hero만으론 심심합니다. Hero를 상속받는 Warrior 클래스를 만드세요.
// extends 키워드를 사용하세요.
// Warrior는 생성될 때 energy(기력)라는 추가 속성을 가집니다. (기본값 100)
// 힌트: 자식 클래스 생성자에서 부모의 생성자를 부를 땐 super()를 써야 합니다.

export default class Warrior extends Hero {
  constructor(name, hp, energy) {
    super(name, hp);
    this.energy = energy;
  }
  
  // 그리고 Warrior 클래스에서 이 attack()을 재정의(Override) 하세요.
  // 전사는 공격할 때 기력(energy)을 10 소모하고, 데미지를 20 입힙니다.
  // 만약 기력이 부족하면 "기력이 부족합니다!"를 출력하고 공격하지 못합니다.
  attack(target) {
    if (this.energy < 10) {
      console.log("기력이 부족합니다!");
      return;
    }
    this.energy -= 10;
    console.log("공격! 20의 데미지!");
    target.takeDamage(20);
  }
}
