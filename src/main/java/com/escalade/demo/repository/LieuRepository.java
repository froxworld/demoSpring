package com.escalade.demo.repository;

import com.escalade.demo.domain.Lieu;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LieuRepository extends CrudRepository<Lieu, Long> {

    Lieu findByNom(String nom);
    List<Lieu> findAllByNom(String nom);
    List<Lieu> findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(float latAvant, float latApres, float longAvant, float longApres);
    void deleteByNom(String nom);

}
