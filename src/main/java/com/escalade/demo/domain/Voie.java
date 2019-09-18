package com.escalade.demo.domain;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.*;
import java.util.Date;


@Entity
public class Voie {
    Logger logger = LoggerFactory.getLogger(Voie.class);

    // a chaque fois qu'on mettra un persist on va faire un log
    @PrePersist
    public void logDebut(){
        logger.info("creation d'une voie en cours " + this.nom);
    }

    @PostPersist
    public void logFin(){
        logger.info("creation faite de " + this.nom);
    }

    Long Id;
    String nom;
    Lieu lieu;
    Parking parking;
    Type_Voie type_voie;
    Type_Zone type_zone;

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

    @ManyToOne
    public Lieu getLieu() {
        return lieu;
    }

    public void setLieu(Lieu lieu) {
        this.lieu = lieu;
    }
    @Enumerated
    public Type_Voie getType_voie() {
        return type_voie;
    }

    public void setType_voie(Type_Voie type_voie) {
        this.type_voie = type_voie;
    }
    @Enumerated
    public Type_Zone getType_zone() {
        return type_zone;
    }

    public void setType_zone(Type_Zone type_zone) {
        this.type_zone = type_zone;
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

    @ManyToOne
    public Parking getParking() {
        return parking;
    }

    public void setParking(Parking parking) {
        this.parking = parking;
    }
}
