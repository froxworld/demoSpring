package com.escalade.demo.service;

//com.escalade

import com.escalade.demo.domain.*;
import com.escalade.demo.repository.*;

//List
import java.util.List;

//spring
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

//    void deleteByName(String name);

    public List<Route> findAllByName(String name) {

        return routeRepository.findAllByName(name);
    }

    public List<Route> findAllByLatitudeAfterAndLatitudeBeforeAndLongitudeAfterAndLongitudeBefore(float firstLat, float lastLat, float firstLong, float lastLong) {
        return routeRepository.findAllByLatitudeAfterAndLatitudeBeforeAndLongitudeAfterAndLongitudeBefore(firstLat, lastLat, firstLong, lastLong);
    }

    public List<Parking> findAllByParking(Parking parking) {

        return routeRepository.findAllByParking(parking);
    }

    public List<Route> findAllByRouteType(RouteType routeType) {
        return routeRepository.findAllByRouteType(routeType);

    }

    public List<Route> findAllByZoneType(ZoneType zoneType) {

        return routeRepository.findAllByZoneType(zoneType);
    }


    public void deleteByName(String name) {
        routeRepository.deleteByName(name);
    }

    public void addRoute(Route route){routeRepository.save(route); }


}

