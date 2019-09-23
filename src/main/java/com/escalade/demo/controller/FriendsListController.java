package com.escalade.demo.controller;

import com.escalade.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class FriendsListController {

    @Autowired
    UserService userService;

    @GetMapping( value = "/Friend/{id}")
    public String findFriendById(@PathVariable int id){
        return "le nom de votre ami est " +id;
    }

    @GetMapping(value = "/Friends")
    public String findAllFriends(){
        //TODO chopper le nom et prenom de l'utilisateur courant
        String name = "test";
        String firstName = "test";
        return "liste de vos amis :" + userService.findAllFriendsListByFirstNameAndLastName(name, firstName);
    }

}
