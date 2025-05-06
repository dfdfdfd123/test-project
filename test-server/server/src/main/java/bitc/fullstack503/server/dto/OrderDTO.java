package bitc.fullstack503.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {


        private String branchId;
        private String branchName;
        private String orderStatus;
        private String startDate;
        private String endDate;
        // + 조회 결과에 필요한 필드들 (예: 주문번호, 상품명, 수량 등)
        private String partsId;
        private String partName;
        private int orderItemQuantity;
        private BigDecimal orderItemPrice;
        private String orderId;
        private String orderDate;

}
