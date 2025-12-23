// 👹 Chapter 3. 상호작용 (실전 전투)
// Q6. [몬스터 출현] Monster 클래스 만들기
// 샌드백이 필요합니다. Monster 클래스를 만드세요.
// 속성: name (이름), hp (체력)


export default class Monster {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  
  // 메서드: takeDamage(damage)
  // 이 메서드는 데미지를 받으면 자신의 hp를 깎고, "[몬스터이름]이 [데미지] 피해를 입었습니다. (남은 체력: [hp])"를 출력합니다.
  takeDamage(damage) {
    this.hp -= damage;
    console.log(
      `${this.name}이 ${damage} 피해를 입었습니다. (남은 체력 : [${this.hp}])`
    );
  }
}
