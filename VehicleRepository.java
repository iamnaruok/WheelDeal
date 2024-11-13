package com.narendrapathak.vehiclemarketplace.repository;

import com.narendrapathak.vehiclemarketplace.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
