package dev.technook.zms.repositories;


import dev.technook.zms.domains.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Long > {
    
}
