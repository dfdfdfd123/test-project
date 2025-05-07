package bitc.fullstack503.server.mapper;
import bitc.fullstack503.server.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HQMapper {

    List<OrderItemInfoDTO> findOrderItemsWithBranchAndParts();

    List<TestDTO> findTestsWithBranchAndParts();

    List<FindPaymentDTO> findPayment();

    List<OrderListDTO>  orderList();

    List<OrderDTO> selectOrderList(OrderDTO dto);
}
