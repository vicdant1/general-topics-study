package com.course.freecodecamp.dao;

import com.course.freecodecamp.model.Person;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class FakePersonDataAccessService implements PersonDao {

    private static List<Person> Db = new ArrayList<>();

    @Override
    public int insertPerson(UUID id, Person person) {
        Db.add(new Person(id, person.getName()));
        return 1;
    }

    @Override
    public List<Person> getAllPeople() {
        return Db;
    }

    @Override
    public Optional<Person> selectPersonById(UUID id) {
        return Db.stream().filter(p -> p.getId().equals(id)).findFirst();
    }

    @Override
    public int deletePersonById(UUID id) {
        return 0;
    }

    @Override
    public int updatePersonById(UUID id, Person person) {
        return 0;
    }
}
