package com.course.freecodecamp.dao;

import com.course.freecodecamp.model.Person;

import java.util.UUID;

public interface PersonDao
{
    int insertPerson(UUID id, Person person);
    default int insertPerson(Person person)
    {
        UUID id = UUID.randomUUID();
        return this.insertPerson(id, person);
    }

}
