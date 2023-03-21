package spring_study.board_crud.api;

        import lombok.AllArgsConstructor;
        import lombok.Data;

@Data
@AllArgsConstructor
public class WrapperClass<E> {
    private E data;
}