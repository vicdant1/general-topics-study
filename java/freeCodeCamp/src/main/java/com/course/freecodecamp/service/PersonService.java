package com.course.freecodecamp.service;

import com.course.freecodecamp.dao.PersonDao;
import com.course.freecodecamp.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {
    private final PersonDao personDao;

    @Autowired
    public PersonService(@Qualifier("fakeDao") PersonDao personDao) {
        this.personDao = personDao;
    }

    public int addPerson(Person person) {
        return personDao.insertPerson(person);
    }

    public List<Person> getAllPeople(){
        return this.personDao.getAllPeople();
    }

    public Optional<Person> selectPersonById(UUID id) {
        return this.personDao.selectPersonById(id);
    }
}
