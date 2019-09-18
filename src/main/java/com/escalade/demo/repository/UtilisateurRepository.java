package com.escalade.demo.repository;

import com.escalade.demo.domain.Utilisateur;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UtilisateurRepository extends CrudRepository<Utilisateur, Long> {

    List<Utilisateur> findAllByNom(String nom);
    List<Utilisateur> findAllByPrenom(String prenom);
    Utilisateur removeUtilisateurByNomAndPrenom(String nom, String prenom);
    void deleteByNom(String nom);

}
