// 🏰 Chapter 1. 기초 설계 (설계도 그리기)
// Q1. [입학 신청서] 용사(Hero) 클래스 탄생
// 판타지 세계에 용사가 등장해야 합니다.
// Hero라는 이름의 클래스를 만드세요.
// 생성자(constructor)를 통해 name(이름)과 hp(체력)를 받아서 저장하세요.
// new 키워드로 체력 100인 용사 "코딩왕"을 생성하고 콘솔에 출력해 보세요.

class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  // Q2. [행동 개시] 인사하기 기능 추가
  // 용사가 가만히 있으면 안 되죠.
  // Hero 클래스 안에 hello()라는 메서드(함수)를 만드세요.
  // 이 메서드를 실행하면 콘솔에 "나는 [이름]이다! 체력은 [hp] 남았다!"라고 출력하게 하세요.
  // 힌트: 클래스 내부의 내 정보(변수)를 쓸 땐 this 키워드가 필수입니다!

  hello() {
    console.log(`나는 ${this.name}이다! 체력은 [${this.hp}] 남았다!`);
  }

  // Q3. [회복 마법] 체력 회복하기
  // 용사가 다쳤을 때를 대비해야 합니다.
  // heal(amount) 메서드를 추가하세요.
  // 파라미터로 받은 amount만큼 hp가 증가해야 합니다.
  // 단, 최대 체력 제한은 없다고 칩니다. "체력이 30 회복되어 [현재 체력]이 되었습니다"를 출력하세요.

  heal(amount) {
    this.hp += amount;
    console.log(`체력이 ${amount} 회복되어 [${this.hp}]이 되었습니다`);
  }

  // Q5. [스킬 연마] 공격(attack) 메서드 오버라이딩
  // Hero 클래스에 기본적으로 attack() 메서드를 만드세요 (데미지 10).
  // attack() 테스트(10의 데미지를 주라고 console.log만 시킴)
  attack() {
    console.log("10의 데미지를 주었습니다.");
  }
}

const hero = new Hero("코딩왕", 100);

// hello 메서드 동작 테스트
hero.hello();

// console.log(hero)

// heal 테스트

hero.heal(30);

// ⚔️ Chapter 2. 상속과 다형성 (직업 선택)
// Q4. [전직] 전사(Warrior) 클래스 (상속의 시작)
// 기본 Hero만으론 심심합니다. Hero를 상속받는 Warrior 클래스를 만드세요.
// extends 키워드를 사용하세요.
// Warrior는 생성될 때 energy(기력)라는 추가 속성을 가집니다. (기본값 100)
// 힌트: 자식 클래스 생성자에서 부모의 생성자를 부를 땐 super()를 써야 합니다.

class Warrior extends Hero {
  constructor(name, hp, energy) {
    super(name, hp);
    this.energy = energy;
  }

  // 그리고 Warrior 클래스에서 이 attack()을 재정의(Override) 하세요.
  // 전사는 공격할 때 기력(energy)을 10 소모하고, 데미지를 20 입힙니다.
  // 만약 기력이 부족하면 "기력이 부족합니다!"를 출력하고 공격하지 못합니다.
  attack() {
    if (this.energy < 10) {
      console.log("기력이 부족합니다!");
      return;
    }
    this.energy -= 10;
    console.log("공격! 20의 데미지!");
  }
}

// warrior 생성
// 이름 워리어 hp 100 에너지 10
const warrior = new Warrior("워리어", 100, 19);

// warrior 생성확인 테스트
console.log(warrior);

// 공격 테스트
warrior.attack();
// 에너지 고갈 확인 테스트
warrior.attack();

// 👹 Chapter 3. 상호작용 (실전 전투)
// Q6. [몬스터 출현] Monster 클래스 만들기
// 샌드백이 필요합니다. Monster 클래스를 만드세요.
// 속성: name (이름), hp (체력)

class Monster {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  // 메서드: takeDamage(damage)
  // 이 메서드는 데미지를 받으면 자신의 hp를 깎고, "[몬스터이름]이 [데미지] 피해를 입었습니다. (남은 체력: [hp])"를 출력합니다.
  takeDamage(damage) {
    hp -= damage;
    console.log(
      `${this.name}이 ${damage} 피해를 입었습니다. (남은 체력 : [${this.hp}])`
    );
  }
}

// Q7. [실전 전투] 용사가 몬스터를 때리다
// 이제 Hero (또는 Warrior) 클래스의 attack(target) 메서드를 수정하세요.
// 파라미터로 Monster 객체(target)를 받습니다.
// 공격 시 target.takeDamage(데미지)를 호출해서 몬스터의 체력을 실제로 깎아야 합니다.
// 미션: 전사 "아서스"가 몬스터 "슬라임"을 공격해서 슬라임의 체력이 줄어드는지 확인하세요.

// 🛡️ Chapter 4. 캡슐화와 고급 기능 (마스터 과정)
// Q8. [안전장치] Getter와 Setter
// hp가 0보다 작아지면 안 됩니다. (죽은 거니까요)
// Hero 클래스의 hp를 직접 수정하는 것을 막고 싶지만, 일단은 set hp(value)를 만들어봅시다.
// 만약 value가 0보다 작으면 0으로 저장하고 "사망했습니다..."를 출력하게 하세요.
// 누군가 hero.hp = -50을 시도했을 때, 실제로는 0이 저장되어야 합니다.
// Q9. [비밀의 힘] Private Field (#)
// 용사에게 남들에게 보여주고 싶지 않은 ultimateGauge(궁극기 게이지)가 있습니다.
// Hero 클래스에 #ultimateGauge라는 Private Field를 만드세요. (클래스 밖에서 hero.#ultimateGauge로 접근하면 에러가 나야 합니다.)
// 공격할 때마다 게이지가 1씩 오르고, 게이지가 값을 출력하는 메서드를 통해서만 확인할 수 있게 하세요.
// Q10. [길드 시스템] Static 메서드와 파티 관리
// 마지막 문제입니다. 하드하게 가봅시다.
// Hero 클래스 안에 static 메서드로 compare(hero1, hero2)를 만드세요.
// 두 명의 용사 객체를 받아서, 누가 더 hp가 많은지 비교하여 승자의 이름을 리턴하는 심판 기능을 구현하세요.
// 사용 예: Hero.compare(전사1, 전사2)
