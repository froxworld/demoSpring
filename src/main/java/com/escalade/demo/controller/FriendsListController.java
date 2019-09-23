package com.escalade.demo.controller;

import com.escalade.demo.domain.User;
import com.escalade.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // genere les URI de notre API
public class FriendsListController {

    @Autowired
    UserService userService;

    @GetMapping( value = "/Friend/{id}")
    public String findFriendById(@PathVariable int id){
        return "le nom de votre ami est " +id;
    }

    @GetMapping(value = "/Friends")
    public List<User> findAllFriends(){
        //TODO chopper le nom et prenom de l'utilisateur courant
        String name = "test";
        String firstName = "test";

        return userService.findAllFriendsListByFirstNameAndLastName(name, firstName);
    }

}
