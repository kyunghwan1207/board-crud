package spring_study.board_crud.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import spring_study.board_crud.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
