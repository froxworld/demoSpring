package com.escalade.demo.domain;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.*;
import java.util.List;

@Entity
public class Lieu {
    Logger logger = LoggerFactory.getLogger(Lieu.class);

    // a chaque fois qu'on mettra un persist on va faire un log
    @PrePersist
    public void logDebut(){
        logger.info("creation du lieu en cours " + this.nom);
    }

    @PostPersist
    public void logFin(){
        logger.info("creation faite de " + this.nom);
    }


    Long Id;
    String nom;
    float coordonnee_Gps_latitude;
    float coordonnee_Gps_longitude;
    List<Voie> listeVoies;


    @Id
    @GeneratedValue
    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }



    public float getCoordonnee_Gps_latitude() {
        return coordonnee_Gps_latitude;
    }

    public void setCoordonnee_Gps_latitude(float coordonnee_Gps_latitude) {
        this.coordonnee_Gps_latitude = coordonnee_Gps_latitude;
    }

    public float getCoordonnee_Gps_longitude() {
        return coordonnee_Gps_longitude;
    }

    public void setCoordonnee_Gps_longitude(float coordonnee_Gps_longitude) {
        this.coordonnee_Gps_longitude = coordonnee_Gps_longitude;
    }

    @OneToMany(mappedBy = "lieu")
    public List<Voie> getListeVoies() {
        return listeVoies;
    }

    public void setListeVoies(List<Voie> listeVoies) {
        this.listeVoies = listeVoies;
    }
}
