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
    TypeVoie typeVoie;
    TypeZone typeZone;

    float latitude;
    float longitude;

    Date creation;
    Date modification;
    Date suppression;

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
    public TypeVoie getTypeVoie() {
        return typeVoie;
    }

    public void setTypeVoie(TypeVoie typeVoie) {
        this.typeVoie = typeVoie;
    }
    @Enumerated
    public TypeZone getTypeZone() {
        return typeZone;
    }

    public void setTypeZone(TypeZone typeZone) {
        this.typeZone = typeZone;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public Date getCreation() {
        return creation;
    }

    public void setCreation(Date creation) {
        this.creation = creation;
    }

    public Date getModification() {
        return modification;
    }

    public void setModification(Date modification) {
        this.modification = modification;
    }

    public Date getSuppression() {
        return suppression;
    }

    public void setSuppression(Date suppression) {
        this.suppression = suppression;
    }

    @ManyToOne
    public Parking getParking() {
        return parking;
    }

    public void setParking(Parking parking) {
        this.parking = parking;
    }
}
