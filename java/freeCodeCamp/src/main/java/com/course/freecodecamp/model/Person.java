package com.course.freecodecamp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;


public class Person {
    private final UUID Id;
    private final String name;

    public Person(@JsonProperty("id") UUID id, @JsonProperty("name") String name) {
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
