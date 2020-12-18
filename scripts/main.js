// Weapons
const greedBarrel = new Weapon();

// Bullets
const greedRifle = extend(MissileBulletType, {
  Draw(b){
    Draw.color(Pal.heal)
    Fill.circle(b.x, b.y, 25)
  } 
});

// Effects
const greed = new Effect(120, e => {
    Draw.color(Color.valueOf("00ff00"));
    Lines.line(
        e.x + e.fout() * -10,
        e.y + e.fout() * -10,
        e.x + e.fout() * 10,
        e.y + e.fout() * 10
    );
    Lines.line(
        e.x + e.fout() * -10,
        e.y + e.fout() *  10,
        e.x + e.fout() * 10,
        e.y + e.fout() * -10
    );
    Lines.circle(e.x, e.y, e.fout() * 20);
    Timer.schedule(() => {
    }, 5);
});

// Properties

greedRifle.damage = 1000;
greedRifle.speed = 9;
greedRifle.homingPower = 1;
greedRifle.lifetime = 420;
greedRifle.trailEffect = greed;
greedRifle.weaveMag = 1;
greedRifle.hitSound = Sounds.bobuxer;
greedRifle.homingRange = 999;
greedRifle.hitEffect = greed;

greedBarrel.rotate = greedBarrel.mirror = true;
greedBarrel.bullet = greedRifle;
greedBarrel.reload = 69;
greedBarrel.shots = 2;
greedBarrel.shotDelay = 5;
greedBarrel.spacing = 6;
greedBarrel.x = 10;
greedBarrel.y = 0;
greedBarrel.shotSound = Sounds.bobuxer;

// Quasar Bobux

const bobux-quasar = extendContent(UnitType, "bobux-quasar", {});
bobux-quasar.constructor = () => extend(MechUnit, {
  killed(){
    this.super$killed();
    print("finnaly bobux quasar got kicked for rickrolling me");
  }
});

// More Bobux
bobux-quasar.speed = 2.5;
bobux-quasar.health = 42069;
bobux-quasar.drawCell = false;
bobux-quasar.hitSize = 25;
bobux-quasar.weapons.add(greedBarrel);
bobux-quasar.mechLegColor = Color.valueOf("ffffff")

});
