package bitc.fullstack503.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {
    private int orderItemId;
    private String orderId;
    private String partsId;
    private int orderItemQuantity;
    private BigDecimal orderItemPrice;
}
