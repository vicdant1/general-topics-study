package com.course.freecodecamp.model;

import java.util.UUID;


public class Person {
    private final UUID Id;
    private final String name;

    public Person(UUID id, String name) {
        this.Id = id;
        this.name = name;
    }

    public UUID getId() {
        return Id;
    }

    public String getName() {
        return name;
    }
}
