#include <iostream>
#include <string>

class Pet {
protected:
    std::string name;
    int age;
    int health;
    int happiness;

public:
    Pet(std::string petName, int petAge) : name(petName), age(petAge), health(100), happiness(100) {}

    void displayStatus() {
        std::cout << "Name: " << name << ", Age: " << age << ", Health: " << health << ", Happiness: " << happiness << std::endl;
    }

    virtual void feed() = 0;
    virtual void play() = 0;
};

class Dog : public Pet {
public:
    Dog(std::string petName, int petAge) : Pet(petName, petAge) {}

    void feed() override {
        this->health += 10;
        this->happiness += 5;
        std::cout << "Feeding the dog." << std::endl;
    }

    void play() override {
        this->health += 5;
        this->happiness += 10;
        std::cout << "Playing with the dog." << std::endl;
    }

    void makeSound() {
        std::cout << "Woof!" << std::endl;
    }
};

class Cat : public Pet {
public:
    Cat(std::string petName, int petAge) : Pet(petName, petAge) {}

    void feed() override {
        this->health += 8;
        this->happiness += 7;
        std::cout << "Feeding the cat." << std::endl;
    }

    void play() override {
        this->health += 6;
        this->happiness += 9;
        std::cout << "Playing with the cat." << std::endl;
    }

    void makeSound() {
        std::cout << "Meow!" << std::endl;
    }
};

class Bird : public Pet {
public:
    Bird(std::string petName, int petAge) : Pet(petName, petAge) {}

    void feed() override {
        this->health += 7;
        this->happiness += 6;
        std::cout << "Feeding the bird." << std::endl;
    }

    void play() override {
        this->health += 4;
        this->happiness += 8;
        std::cout << "Playing with the bird." << std::endl;
    }

    void makeSound() {
        std::cout << "Chirp!" << std::endl;
    }
};

int main() {
    Dog dogArray[2] = { Dog("Bruno", 3), Dog("Max", 2) };
    Cat catArray[2] = { Cat("Whiskers", 2), Cat("Mittens", 1) };
    Bird birdArray[2] = { Bird("Tweety", 1), Bird("Polly", 3) };

    for(int i = 0; i < 2; i++) {
        dogArray[i].displayStatus();
        dogArray[i].feed();
        dogArray[i].play();
        dogArray[i].makeSound();
        dogArray[i].displayStatus();
        std::cout << std::endl;
    }

    for(int i = 0; i < 2; i++) {
        catArray[i].displayStatus();
        catArray[i].feed();
        catArray[i].play();
        catArray[i].makeSound();
        catArray[i].displayStatus();
        std::cout << std::endl;
    }

    for(int i = 0; i < 2; i++) {
        birdArray[i].displayStatus();
        birdArray[i].feed();
        birdArray[i].play();
        birdArray[i].makeSound();
        birdArray[i].displayStatus();
        std::cout << std::endl;
    }

    return 0;
}
