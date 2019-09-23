package com.escalade.demo.service;

import com.escalade.demo.domain.*;
import com.escalade.demo.repository.ParkingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParkingService {

    ParkingRepository parkingRepository;

    public Parking findByName(String name) {
        return parkingRepository.findByName(name);
    }

    public List<Parking> findAllByLatitudeAfterAndLatitudeBeforeAndLongitudeAfterAndLongitudeBefore(float firstLat, float lastLat, float firstLong, float lastLong) {
        return parkingRepository.findAllByLatitudeAfterAndLatitudeBeforeAndLongitudeAfterAndLongitudeBefore(firstLat, lastLat, firstLong, lastLong);
    }

    public List<Parking> findAllByRoutesListContaining(Route route) {
        return parkingRepository.findByRouteList(route);
    }

    public void deleteParking(String name){
        parkingRepository.deleteParkingByName(name);

    }



}
