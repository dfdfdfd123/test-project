package bitc.fullstack503.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrdersDTO {
    private String orderId;
    private String branchId;
    private Date orderDate;
    private String orderStatus;
    private BigDecimal orderPrice;
    private String orderDeny;
}
