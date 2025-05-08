package bitc.fullstack503.server.mapper;
import bitc.fullstack503.server.dto.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface HQMapper {

//    미결제 리스트
    List<UnpaidListDTO> findOrderItemsWithBranchAndParts();

//    결제 내역
    List<FindPaymentDTO> findPayment();

    //    결제 내역 상세
    List<FindPaymentDetailDTO> findPaymentDetail();

//    발주 내역
    List<OrderListDTO>  orderList();

//    조회 결과
    List<SearchDTO> selectOrderList(SearchDTO dto);

    // 단일 주문 처리
    int updateOrderStatusAndDeny(@Param("orderId") String orderId,
//                                 @Param("partsId") String partsId,
                                 @Param("orderStatus") String orderStatus,
                                 @Param("orderDeny") String orderDeny);
//                                    @Param("orderItemStatus") String orderItemStatus);

    // 복수 주문 처리
    int updateMultipleOrderStatusAndDeny(@Param("orderIdList") List<String> orderIdList,
                                         @Param("orderStatus") String orderStatus,
                                         @Param("orderDeny") String orderDeny);

//    List<TestDTO> findTestsWithBranchAndParts();
}
