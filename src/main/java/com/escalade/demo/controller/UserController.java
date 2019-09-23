package com.escalade.demo.controller;

import com.escalade.demo.domain.User;
import com.escalade.demo.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@Api(value = "utilisateur", tags = {"Api utilisateur"})
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService userService;


    //recherche la liste de tous les utilisateurs
    @ApiOperation(value = "affiche la liste de utilisateur", response = List.class)
    @GetMapping("/User")
    public List<User> findAllUser() {
        logger.info("affichage de tous les utilisateurs");
        return userService.findAll();
    }

    //ajout d'un utilisateur
    @ApiOperation(value = "ajouter un utilisateur")
    @PostMapping("/User")
    public Long addUser(@RequestParam("name") String name,
                        @RequestParam("firstName") String firstName,
                        @RequestParam("day") int day,
                        @RequestParam("month") int month,
                        @RequestParam("year") int year
    ) {
        return userService.addUser(name, firstName, day, month, year);
    }

    //efface un utilisateur par son id
    @ApiOperation(value = "supprime la liste de utilisateur")
    @DeleteMapping("/User")
    public void deleteUserById(@RequestParam("Id") Long id) {
        logger.info("efface l'utilisateur ");
        userService.deleteUserById(id);
    }

    //ajoute un nouvel ami à un utilisateur
    @ApiOperation(value = "Ajouter un ami")
    @PostMapping("/Friend")
    public void addFriendList(@RequestParam("name") String name, @RequestParam("firstName") String firstName) {

        // TODO A FAIRE Trouver l'utilisateur courant qui sera loggué
        User courant = userService.findById((long) 1).get();
        userService.addFriendsList(courant, name, firstName);
    }

    //test pour afficher une page html d index simple
    @RequestMapping(value = "/Index", method = RequestMethod.GET)
    public String index() {
        return "page d'index";
    }

    //ajout d'un controller de costomisé
    @RestController
    public class CustomController {

        @RequestMapping(value = "/Custom", method = RequestMethod.POST)
        public String custom() {
            System.out.println("vous avez entrer :" + custom());
            return "Custom contollers";
        }
    }
}

