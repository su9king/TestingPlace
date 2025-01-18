#ifndef WORLD_H
#define WORLD_H

#include <string>
#include <vector>
#include "Resources/Item.h"     
#include "Resources/Monster.h"
#include "Resources/Player.h"
#include "Resources/Tool.h"

using namespace std;

class World {

public:

	int number;
	int playerCount = 0;

	World(int n);


	void login() {}

	void register() {}

};

#endif