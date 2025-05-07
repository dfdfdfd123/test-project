package bitc.fullstack503.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemInfoDTO {
    private String branchId;
    private String branchName;
    private String partId;
    private String partName;
    private int orderItemQuantity;
    private String orderId;
    private BigDecimal orderItemPrice;
    private Date orderDate;
    private String orderStatus;
}





