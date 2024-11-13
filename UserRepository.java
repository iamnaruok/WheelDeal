package com.narendrapathak.vehiclemarketplace.repository;

import com.narendrapathak.vehiclemarketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
