package dev.technook.zms.repositories;

import dev.technook.zms.domains.FeedingTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedingTimeRepository extends JpaRepository<FeedingTime, Long> {
}
