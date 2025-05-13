package bitc.fullstack503.server.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class OrderItemDTO {
    private int orderItemId;
    private String orderId;
    private String partId;
    private int orderItemQuantity;
    private BigDecimal orderItemPrice;
}
