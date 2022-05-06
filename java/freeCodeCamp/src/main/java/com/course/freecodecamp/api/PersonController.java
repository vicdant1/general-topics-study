package com.course.freecodecamp.api;

import com.course.freecodecamp.service.PersonService;
import com.course.freecodecamp.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/person")
@RestController
public class PersonController {
    private final PersonService personService;
    resume at 43:46
    https://www.youtube.com/watch?v=vtPkZShrvXQ&ab_channel=freeCodeCamp.org
    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping
    public void addPerson(@RequestBody Person person)
    {
        personService.addPerson(person);
    }

    @GetMapping
    public List<Person> getAllPeople(){
        return this.personService.getAllPeople();
    }

    @GetMapping(path = "{id}")
    public Person getPersonById(@PathVariable("id") UUID id)
    {
        return this.personService.selectPersonById(id).orElse(null);
    }
}
