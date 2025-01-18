#include "World.h"


World::World(int n)
	: number(n) {}

int main() {

	World testWorld(1);
	BasicSword basicSword;
	HighQualitySword highQualitySword;
	WarriorSword warriorSword;
	MagicianStick magicianStick;
	LowArmor lowArmor;
	MiddleArmor middleArmor;
	HighArmor highArmor;
	HealingPotion hp(20, 2);
	ManaPotion mp(20, 2);

	cout << "Basic Sword - Price: " << basicSword.price << ", Defense Power: " << basicSword.defensePower << ", Power: " << basicSword.power << endl;
	cout << "High Quality Sword - Price: " << highQualitySword.price << ", Defense Power: " << highQualitySword.defensePower << ", Power: " << highQualitySword.power << endl;
	cout << "Warrior Sword - Price: " << warriorSword.price << ", Defense Power: " << warriorSword.defensePower << ", Power: " << warriorSword.power << endl;
	cout << "Magician Stick - Price: " << magicianStick.price << ", Defense Power: " << magicianStick.defensePower << ", Power: " << magicianStick.power << endl;

	cout << "Low Armor - Price: " << lowArmor.price << ", Defense Power: " << lowArmor.defensePower << ", Power: " << lowArmor.power << endl;
	cout << "Middle Armor - Price: " << middleArmor.price << ", Defense Power: " << middleArmor.defensePower << ", Power: " << middleArmor.power << endl;
	cout << "High Armor - Price: " << highArmor.price << ", Defense Power: " << highArmor.defensePower << ", Power: " << highArmor.power << endl;
}