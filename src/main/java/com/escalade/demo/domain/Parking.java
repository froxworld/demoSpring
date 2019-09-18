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

    @OneToMany(mappedBy = "parking")
    public List<Voie> getListeVoies() {
        return listeVoies;
    }

    public void setListeVoies(List<Voie> voie_de_reference) {
        this.listeVoies = voie_de_reference;
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
}
