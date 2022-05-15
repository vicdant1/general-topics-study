package com.example.parkingapi.services;

import com.example.parkingapi.repositories.ParkingSpotRepository;
import com.example.parkingapi.services.interfaces.IParkingSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParkingSpotService implements IParkingSpotService {
    //@Autowired
    //private final ParkingSpotRepository _parkingSpotRepository;

    private final ParkingSpotRepository _parkingSpotRepository;
    public ParkingSpotService(ParkingSpotRepository parkingSpotRepository) {
        _parkingSpotRepository = parkingSpotRepository;
    }
}
