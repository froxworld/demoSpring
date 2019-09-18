package com.escalade.demo.domain;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Parking {

    Logger logger = LoggerFactory.getLogger(Parking.class);

    // a chaque fois qu'on mettra un persist on va faire un log
    @PrePersist
    public void logDebut(){
        logger.info("creation d'un parking en cours " + this.nom);
    }

    @PostPersist
    public void logFin(){
        logger.info("creation faite de " + this.nom);
    }

    Long Id;

    String nom;
    List<Voie> listeVoies;
    float coordonnee_Gps_latitude;
    float coordonnee_Gps_longitude;
    Date date_de_creation;
    Date date_de_modification;
    Date date_de_suppression;

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

    @OneToMany(mappedBy = "parking")
    public List<Voie> getListeVoies() {
        return listeVoies;
    }

    public void setListeVoies(List<Voie> voie_de_reference) {
        this.listeVoies = voie_de_reference;
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

    public Date getDate_de_creation() {
        return date_de_creation;
    }

    public void setDate_de_creation(Date date_de_creation) {
        this.date_de_creation = date_de_creation;
    }

    public Date getDate_de_modification() {
        return date_de_modification;
    }

    public void setDate_de_modification(Date date_de_modification) {
        this.date_de_modification = date_de_modification;
    }

    public Date getDate_de_suppression() {
        return date_de_suppression;
    }

    public void setDate_de_suppression(Date date_de_suppression) {
        this.date_de_suppression = date_de_suppression;
    }
}
