package dev.technook.zms.repositories;

import dev.technook.zms.domains.CareTaker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareTakerRepository  extends JpaRepository<CareTaker, Long> {
}
