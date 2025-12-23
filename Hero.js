// 🏰 Chapter 1. 기초 설계 (설계도 그리기)
// Q1. [입학 신청서] 용사(Hero) 클래스 탄생
// 판타지 세계에 용사가 등장해야 합니다.
// Hero라는 이름의 클래스를 만드세요.
// 생성자(constructor)를 통해 name(이름)과 hp(체력)를 받아서 저장하세요.
// new 키워드로 체력 100인 용사 "코딩왕"을 생성하고 콘솔에 출력해 보세요.

export default class Hero {
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
  
  // Q7. [실전 전투] 용사가 몬스터를 때리다
  // 이제 Hero (또는 Warrior) 클래스의 attack(target) 메서드를 수정하세요.
  // 파라미터로 Monster 객체(target)를 받습니다.
  // 공격 시 target.takeDamage(데미지)를 호출해서 몬스터의 체력을 실제로 깎아야 합니다.
  // 미션: 전사 "아서스"가 몬스터 "슬라임"을 공격해서 슬라임의 체력이 줄어드는지 확인하세요.
  attack(target) {
    console.log("10의 데미지를 주었습니다.");
    target.takeDamage(10);
    this.#ultimateGauge += 1;
    // 공격할 때마다 게이지가 1씩 오르고,
  }
  
  // 🛡️ Chapter 4. 캡슐화와 고급 기능 (마스터 과정)
  // Q8. [안전장치] Getter와 Setter
  // hp가 0보다 작아지면 안 됩니다. (죽은 거니까요)
  // Hero 클래스의 hp를 직접 수정하는 것을 막고 싶지만, 일단은 set hp(value)를 만들어봅시다.
  // 만약 value가 0보다 작으면 0으로 저장하고 "사망했습니다..."를 출력하게 하세요.
  // 누군가 hero.hp = -50을 시도했을 때, 실제로는 0이 저장되어야 합니다.
  
  // getter 메서드 생성(hp 반환)
  // _를 붙이는 이유 = 자기 자신을 무한반복하기 때문
  // this.hp = get hp()
  // 그렇기에 _를 붙여 클래스에 잇는 hp라고 명시하기 위함
  get hp() {
    return this._hp;
  }
  
  // setter 메서드 생성(value값을 hp에 저장)
  set hp(value) {
    // 만약에 hp가 0 이하일 때, this.hp는 0을 저장하고
    // 사망했습니다..를 출력
    if (value <= 0) {
      this._hp = 0;
      console.log("사망했습니다...");
      return;
    }
    this._hp = value;
  }
  // Q9. [비밀의 힘] Private Field (#)
  // 용사에게 남들에게 보여주고 싶지 않은 ultimateGauge(궁극기 게이지)가 있습니다.
  // Hero 클래스에 #ultimateGauge라는 Private Field를 만드세요. (클래스 밖에서 hero.#ultimateGauge로 접근하면 에러가 나야 합니다.)
  #ultimateGauge = 0;
  
  //  게이지가 값을 출력하는 메서드를 통해서만 확인할 수 있게 하세요.
  ultimateGaugeCheck() {
    return console.log(`현재게이지 ${this.#ultimateGauge}`);
  }
  // Q10. [길드 시스템] Static 메서드와 파티 관리
  // 마지막 문제입니다. 하드하게 가봅시다.
  // Hero 클래스 안에 static 메서드로 compare(hero1, hero2)를 만드세요.
  // 두 명의 용사 객체를 받아서, 누가 더 hp가 많은지 비교하여 승자의 이름을 리턴하는 심판 기능을 구현하세요.
  static compare(hero1, hero2){
    console.log(hero1.hp)
    console.log(hero2.hp)
    if (hero1.hp > hero2.hp){
      return console.log(`승자는 ${hero1.name}!`)
    }
    else if(hero1.hp === hero2.hp){
      return console.log(`무승부!`)
    }
    else{
      
      return console.log(`승자는 ${hero2.name}!`)
      
    }
  }
}
